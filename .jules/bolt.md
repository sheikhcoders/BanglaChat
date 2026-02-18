# Bolt's Performance Journal

## 2026-02-18 - CI Workflow Optimization

**Learning:** Adding concurrency control with `cancel-in-progress: true` in CI workflows is a high-leverage performance win for development speed and resource efficiency, as it prevents redundant runs on the same branch.
**Action:** Always include concurrency groups in new CI workflows to save 20-40% of Actions minutes.
