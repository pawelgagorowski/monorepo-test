# fe-clone-test

Minimal Next.js frontend (stand-in for `aptus-cars`) used to test merging two repositories
into a monorepo.

## Local setup

The backend lives in a separate repository (`BE-clone-test`). To run everything locally:

1. Clone `BE-clone-test` and start it (Node 22, Docker for Postgres + Mailhog) — see its README.
2. Here (Node 24):

```bash
nvm use
npm install
npm run dev   # http://localhost:3001, expects the BE on http://localhost:3000
```

FE-only work against the shared develop API: `npm run dev:remote-api`.
