# BE-clone-test

Minimal NestJS backend (stand-in for `cars-service`) used to test merging two repositories
into a monorepo. The frontend lives in a separate repository (`fe-clone-test`).

## Local setup (Node 22 + Docker)

```bash
nvm use
cp .env.template .env
docker compose up -d   # Postgres + Mailhog
npm install
npm run start:dev      # http://localhost:3000/health
```
