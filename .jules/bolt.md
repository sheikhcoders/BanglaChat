## 2026-02-16 - CI Efficiency in Early-Stage Repositories

**Learning:** Significant performance gains and resource savings can be achieved even before application code exists by optimizing CI workflows. Adding concurrency control and path filtering prevents wasted Actions minutes on redundant builds and non-code updates.
**Action:** Always implement `concurrency` with `cancel-in-progress: true` and `paths-ignore` for metadata/journaling directories in CI workflows to ensure efficient resource usage from day one.
