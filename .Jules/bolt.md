# Bolt's Performance Journal

## 2026-04-16 - CI Compute Optimization via paths-ignore and concurrency
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` for non-code files (README.md, .Jules/**) and `concurrency` with `cancel-in-progress: true` provides immediate performance wins by eliminating unnecessary CI runs and canceling redundant ones, saving significant compute resources.
**Action:** Always include `paths-ignore` for documentation and journal directories in new workflows, and ensure `concurrency` is configured to prevent pipeline backlog.
