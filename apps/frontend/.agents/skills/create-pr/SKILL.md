---
name: create-pr
description: Open a pull request for the current branch against develop.
---

# Create PR

1. Make sure the branch is pushed.
2. Title: `[FE] <type>: <description>`.
3. Base branch: `develop`.
4. Body: what changed, why, how to test. Keep it under 300 words.
5. `gh pr create --base develop --title "<title>" --body "<body>"`.
