---
name: code-review
description: Perform a focused code review of only the modified code, pointing out issues without providing ready-made solutions.
---

# Code review

1. Diff the branch against `develop`: `git diff develop...HEAD`.
2. Review only changed lines. Flag bugs, missing tests and convention violations (see `AGENTS.md`).
3. Check that `src/api/*` types still match the BE — ask the author if unsure.
4. Run `npm run check` (Biome) and `npm run tsc-check`.
5. Report findings ordered by severity. Do not write the fixes.
