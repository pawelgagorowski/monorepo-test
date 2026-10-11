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

## Path and config fixes applied after the import

Needed for `npm ci && npx turbo run typecheck lint test` to pass at the root. No code changes.

| File | Change | Why |
|---|---|---|
| `apps/backend/package.json`, `apps/backend/.nvmrc` | Node 22 → 24 | The root `.npmrc` has `engine-strict=true`, so `npm ci` refuses a workspace that requires Node 22. In the real migration this is Phase 0 pre-work. |
| `apps/*/package.json` | `name` → `@cars/frontend`, `@cars/backend` | Workspace names used by `--filter` and `turbo prune --scope`. |
| `apps/*/package.json` | new `typecheck` script (`tsc --noEmit`) | Turbo runs the script named after the task; neither app had one. |
| `apps/backend/package.json` | `lint` without `--fix` (moved to `lint:fix`) | CI has to report lint errors, not fix them silently. |
| `apps/backend/package.json` | `test`: `vitest --passWithNoTests` | The backend has no tests yet and Vitest exits with 1 when it finds none. |
| `apps/frontend/.npmrc` | removed | npm ignores `.npmrc` inside workspaces; the same policy lives in the root `.npmrc`. |

## Known leftovers for later phases

- `apps/backend/Dockerfile` still uses `node:22-alpine` (deploy pipelines move in Phase 2).
- Each app keeps its own AGENTS.md, skills, cursor rules, glossary and husky hooks. The apps'
  `prepare` (`husky install`) scripts do not work from inside `apps/*`; hooks move to the root later.
- Biome reports that `apps/frontend/biome.json` uses an older schema version (info only).
- `npm audit` reports vulnerabilities in dev tooling (Vitest 2/3, ESLint 8) inherited from the apps'
  version ranges.
- The apps do not extend the `packages/config` tsconfig bases yet.
