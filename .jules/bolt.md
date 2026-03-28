# Bolt Performance Journal

## 2025-03-28 - CI Resource Optimization
**Learning:** In the early stages of a repository (uninitialized state), CI workflows often trigger unnecessarily for documentation-only changes or fail due to missing manifests (like `package.json`). Using `paths-ignore` and job-level `if` conditions can save significant runner time and prevent "failed" status on non-code changes.
**Action:** Implement `paths-ignore` and "Bootstrap Guard" patterns in all CI workflows.
