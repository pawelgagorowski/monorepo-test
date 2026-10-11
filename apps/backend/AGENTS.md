# AGENTS.md — BE-clone-test

Instructions for AI coding assistants. `CLAUDE.md` is a symlink to this file.

## Project

NestJS backend. Its only client is the frontend in a separate repository (`fe-clone-test`).

## Commands

```bash
cp .env.template .env
docker compose up -d    # Postgres + Mailhog
npm run start:dev       # :3000
npm run lint-check      # ESLint
npm run format-check    # Prettier
npm test                # Vitest
```

## Conventions

- Throw Nest HTTP exceptions from services (see `.cursor/rules/exceptions.mdc`).
- Enums live in `src/<module>/enums/`. The FE keeps its own copies — tell the FE team when values change.
- Commit format: `[BE] <type>: <description>`. Base branch: `develop`.
- Branches: `develop` → `pre-prod` → `main`.
- Domain language: `docs/GLOSSARY.md`. Decisions: `docs/adr/` (numbered).
