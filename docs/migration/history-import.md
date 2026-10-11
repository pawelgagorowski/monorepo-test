# History import

`scripts/import-history.sh` imports the `develop` history of both old repositories:

| Old repository | Directory | PR references in commit messages |
|---|---|---|
| `pawelgagorowski/fe-clone-test` | `apps/frontend` | `#4` → `pawelgagorowski/fe-clone-test#4` |
| `pawelgagorowski/BE-clone-test` | `apps/backend` | `#4` → `pawelgagorowski/BE-clone-test#4` |

## Running it

Requires git-filter-repo (`brew install git-filter-repo` or `pip3 install --user git-filter-repo`).

```bash
git switch develop
scripts/import-history.sh
# or from local checkouts:
FRONTEND_SOURCE=../FE-test BACKEND_SOURCE=../BE-test scripts/import-history.sh
```

- Only `develop` is imported. `staging` and `main` stay at the initial commit and get their content
  through the normal `develop` → `staging` → `main` promotion after cut-over.
- Tags are not imported.
- The old repositories are only cloned, never modified.

## Re-running (final sync at cut-over)

filter-repo is deterministic: the same source commits are rewritten to the same hashes on every run.
A second run therefore merges only the commits added to the old `develop` since the previous run, and
reports "already up to date" when there are none.

If a new upstream commit touches a file that was changed here after the import (see the fixes
below), the merge stops with a conflict that has to be resolved by hand.
