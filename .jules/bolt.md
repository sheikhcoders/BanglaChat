## 2026-06-29 - [Initial CI Optimization for Uninitialized Repository]
**Learning:** In the early stages of a project with frequent documentation and journal updates, CI workflows trigger unnecessarily on files that don't affect the build or tests. Adding `paths-ignore` and concurrency controls can significantly reduce wasted compute minutes.
**Action:** Implement `paths-ignore` for documentation and `concurrency` with `cancel-in-progress: true` for non-deployment workflows.
