# Mitigate npm supply-chain attacks

- Status: accepted
- Date: 2026-09-15

## Context

Compromised npm packages run arbitrary code through lifecycle scripts and are usually detected
within days of publication.

## Decision

`.npmrc` sets:

- `ignore-scripts=true` — dependency lifecycle scripts do not run; required setup steps
  (`npm run prepare`) are run manually.
- `min-release-age=7` — npm ignores versions published less than 7 days ago (npm >= 11.10).
- `engine-strict=true` — installs fail on the wrong Node/npm version.

## Consequences

Only this repository is covered. The backend repository has no equivalent `.npmrc`.
