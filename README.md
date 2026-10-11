# monorepo-test

Rehearsal of merging `fe-clone-test` and `BE-clone-test` into one repository
(npm workspaces + Turborepo).

```
apps/frontend     Next.js — full history imported from fe-clone-test
apps/backend      NestJS — full history imported from BE-clone-test
packages/config   shared tsconfig bases
```

## Getting started

```bash
nvm use
npm ci
npm run check   # turbo run typecheck lint test
```

How the history is imported and which fixes were applied on top:
[docs/migration/history-import.md](docs/migration/history-import.md).
