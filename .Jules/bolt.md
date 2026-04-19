# Bolt's Performance Journal

## 2026-04-18 - CI Compute Optimization
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` and `concurrency: cancel-in-progress: true` is a critical performance win to prevent CI backlog and wasted compute resources.
**Action:** Always add `paths-ignore` for non-code files (like `README.md` and `.Jules/**`) and enable `cancel-in-progress` for CI workflows.

## 2026-04-18 - Respecting Deployment Constraints
**Learning:** General performance/efficiency patterns (like `cancel-in-progress: true`) must not override explicit project-specific safety constraints, especially regarding production deployments.
**Action:** Always read workflow comments carefully; if a file warns against canceling in-progress runs for deployments, respect it.
