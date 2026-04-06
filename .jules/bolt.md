## 2026-04-05 - CI Compute Optimization via paths-ignore
**Learning:** In repositories with frequent documentation or journal updates (like .jules/), CI workflows without `paths-ignore` consume unnecessary compute resources. Adding `paths-ignore` for non-code files provides a 100% compute saving for those specific commits.
**Action:** Always check for `paths-ignore` in GitHub Actions workflows when the repository contains significant non-code directories or files.
