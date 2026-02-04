## 2026-02-04 - Redundant CI Runs
**Learning:** In this repository, multiple pushes to the same branch trigger redundant CI runs in `node.js.yml`, consuming significant CI minutes (5-10 mins per run).
**Action:** Always ensure `concurrency` with `cancel-in-progress: true` is configured for CI workflows to optimize resource usage and provide faster feedback.
