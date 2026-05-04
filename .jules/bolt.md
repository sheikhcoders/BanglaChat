## 2026-05-04 - CI Resource Optimization
**Learning:** In uninitialized or documentation-heavy repositories, CI workflows often waste compute on redundant runs or fail due to missing manifests. Using `paths-ignore` and `concurrency` with `cancel-in-progress` are the most effective initial performance levers.
**Action:** Always include `concurrency` and `paths-ignore` in GitHub Actions workflows to minimize wasted runner minutes.
