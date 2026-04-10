## 2026-04-07 - CI Performance Optimization
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` and `concurrency: cancel-in-progress: true` is a critical performance win to prevent CI backlog and wasted compute resources.
**Action:** Always check if `paths-ignore` for non-code files and `concurrency` guards are implemented in GitHub Actions workflows.
