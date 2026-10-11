# AGENTS.md

Shared instructions for AI coding assistants. `CLAUDE.md` is a symlink to this file.
App-specific commands and quirks: `apps/frontend/AGENTS.md`, `apps/backend/AGENTS.md`.

## Layout

```
apps/frontend/              Next.js (@cars/frontend), history imported from fe-clone-test
apps/backend/               NestJS (@cars/backend), history imported from BE-clone-test
packages/config/            shared tsconfig bases (@cars/config)
scripts/import-history.sh   imports / re-syncs develop history from the old repositories
docs/                       shared docs; migration notes in docs/migration/
```

## Commands (repository root)

```bash
nvm use                                       # Node 24
npm ci                                        # one package-lock.json for all workspaces
npm run check                                 # turbo run typecheck lint test
npx turbo run <task> --filter=@cars/backend   # a single workspace
npm install <pkg> -w @cars/frontend           # add a dependency to one app
```

The root `.npmrc` (`ignore-scripts`, `min-release-age`, `engine-strict`) applies to every workspace;
npm ignores `.npmrc` files inside `apps/*`.

Turborepo docs matching the installed version: `node_modules/turbo/docs/`.

## Conventions

- Branches: `develop` → `staging` → `main`. Base branch: `develop`.
- Commit format: `[FE] | [BE] | [FE+BE] <type>: <description>`.
- Install dependencies from the root only — never run `npm install` inside `apps/*`.
- Each app still has its own AGENTS.md, skills, cursor rules and glossary; they move to the root later.
