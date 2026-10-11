# AGENTS.md — fe-clone-test

Instructions for AI coding assistants. `CLAUDE.md` is a symlink to this file.

## Project

Next.js frontend. All data comes from the backend in a separate repository (`BE-clone-test`);
its source is not available in this checkout.

## Commands

```bash
npm run dev             # :3001, needs the BE running locally on :3000
npm run dev:remote-api  # against the shared develop API
npm run check           # Biome (lint + format)
npm test                # Vitest
npm run tsc-check
```

## Conventions

- Enums and response types in `src/api/*` are hand-written mirrors of the BE. When the BE changes,
  update them manually.
- Lint/format: Biome — not ESLint, not Prettier.
- Commit format: `[FE] <type>: <description>`. Base branch: `develop`.
- Branches: `develop` → `pre-prod` → `main`.
- Domain language: `docs/GLOSSARY.md`.
