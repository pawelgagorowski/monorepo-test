---
name: code-review
description: Review the modified code and point out issues.
---

# Code review

1. Diff the branch against `develop`: `git diff develop...HEAD`.
2. Review only changed lines. Flag bugs and convention violations (see `AGENTS.md`).
3. Run `npm run lint-check` and `npm run format-check`.
4. Report findings grouped by file.
