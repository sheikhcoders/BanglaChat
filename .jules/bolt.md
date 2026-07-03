# Bolt's Journal - Critical Learnings

## 2026-07-03 - CI Efficiency in Uninitialized Repositories
**Learning:** In repositories where application code is absent or in flux, GitHub Actions workflows can waste significant runner minutes on non-code changes (like documentation or agent journals) and obsolete commits.
**Action:** Always implement `paths-ignore` for documentation and implement `concurrency` with `cancel-in-progress: true` for CI workflows to maximize resource efficiency from day one.
