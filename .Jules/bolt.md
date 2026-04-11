## 2026-04-11 - Optimized CI Workflows for Resource Efficiency
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` and `concurrency: cancel-in-progress: true` is a critical performance win. It prevents CI backlog and wasted compute resources on non-functional changes.
**Action:** Always include `paths-ignore` for `README.md` and `.Jules/**` (or equivalent documentation/journal directories) in GitHub Action workflows. Use `concurrency` with `cancel-in-progress: true` for non-production deployment workflows to ensure faster feedback loops.
