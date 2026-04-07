## 2026-04-07 - CI Workflow Optimization
**Learning:** In uninitialized repositories or those with frequent non-code updates (like journals or READMEs), CI workflows can waste significant compute resources and create a backlog.
**Action:** Always implement `paths-ignore` for non-code directories and files, and use `concurrency` with `cancel-in-progress: true` to ensure only the latest code is tested.
