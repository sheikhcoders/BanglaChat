## 2026-05-15 - Optimizing CI Efficiency
**Learning:** CI compute can be wasted on documentation-only changes or redundant builds in uninitialized repository states. Adding `paths-ignore`, `concurrency` controls, and step-level guards significantly reduces resource consumption.
**Action:** Always implement `paths-ignore` for non-code files and use `cancel-in-progress: true` for development workflows.
