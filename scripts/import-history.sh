#!/usr/bin/env bash
#
# Imports the develop history of the frontend and backend repositories into this monorepo.
#
# Each source repository is cloned fresh into a temporary directory and rewritten with git filter-repo:
#   - every commit looks as if its files had always lived in apps/<app>,
#   - bare "#<PR>" references in commit messages become cross-repo links ("<owner>/<repo>#<PR>"),
#     so they keep pointing at the PR in the old repository.
# The rewritten develop branch is then merged into this repository's develop branch.
#
# Only develop is imported; staging and main get their content through the normal promotion.
# Tags are never imported (clone and fetch run with --no-tags).
#
# Re-runnable: filter-repo is deterministic, so a second run rewrites already-imported commits to the
# same hashes and the merge brings in only what is new. The same procedure is used for the final
# develop sync at cut-over.
#
# Usage (from a clean develop checkout of the monorepo):
#   scripts/import-history.sh
#
# Import from other sources, e.g. local checkouts:
#   FRONTEND_SOURCE=../FE-test BACKEND_SOURCE=../BE-test scripts/import-history.sh

set -euo pipefail

FRONTEND_SOURCE=${FRONTEND_SOURCE:-https://github.com/pawelgagorowski/fe-clone-test.git}
BACKEND_SOURCE=${BACKEND_SOURCE:-https://github.com/pawelgagorowski/BE-clone-test.git}
FRONTEND_SLUG=pawelgagorowski/fe-clone-test
BACKEND_SLUG=pawelgagorowski/BE-clone-test
BRANCH=develop

fail() {
  echo "error: $*" >&2
  exit 1
}

absolute_source() {
  if [ -d "$1" ]; then
    (cd "$1" && pwd)
  else
    echo "$1"
  fi
}

command -v git-filter-repo >/dev/null ||
  fail "git filter-repo not found (brew install git-filter-repo, or pip3 install --user git-filter-repo)"

cd "$(git rev-parse --show-toplevel)"
[ "$(git branch --show-current)" = "$BRANCH" ] || fail "check out '$BRANCH' first"
[ -z "$(git status --porcelain --untracked-files=no)" ] || fail "working tree has uncommitted changes"

FRONTEND_SOURCE=$(absolute_source "$FRONTEND_SOURCE")
BACKEND_SOURCE=$(absolute_source "$BACKEND_SOURCE")

WORK_DIR=$(mktemp -d)
trap 'rm -rf "$WORK_DIR"' EXIT

import_app() {
  local name=$1 source=$2 subdirectory=$3 slug=$4 area=$5
  local clone="$WORK_DIR/$name"

  echo "==> $name: cloning $source ($BRANCH)"
  git clone --quiet --no-local --no-tags --single-branch --branch "$BRANCH" "$source" "$clone"

  echo "==> $name: rewriting into $subdirectory, #<PR> -> $slug#<PR>"
  git -C "$clone" filter-repo --force --quiet \
    --to-subdirectory-filter "$subdirectory" \
    --message-callback "return re.sub(rb'(?<![\\w/])#(\\d+)(?!\\w)', rb'$slug#\\1', message)"

  git fetch --quiet --no-tags "$clone" "$BRANCH"
  if git merge-base --is-ancestor FETCH_HEAD HEAD; then
    echo "==> $name: already up to date ($(git rev-parse --short FETCH_HEAD))"
    return
  fi

  echo "==> $name: merging $(git rev-parse --short FETCH_HEAD) into $BRANCH"
  git merge --quiet --no-ff --allow-unrelated-histories --no-edit \
    -m "[$area] chore: import $name $BRANCH history into $subdirectory" FETCH_HEAD
}

import_app fe-clone-test "$FRONTEND_SOURCE" apps/frontend "$FRONTEND_SLUG" FE
import_app BE-clone-test "$BACKEND_SOURCE" apps/backend "$BACKEND_SLUG" BE

[ -z "$(git tag -l)" ] || echo "warning: the repository contains tags; they were not created by this import" >&2
echo "Done. develop is at $(git rev-parse --short HEAD)."
