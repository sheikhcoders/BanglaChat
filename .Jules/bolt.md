# Bolt's Performance Journal

## 2026-04-18 - CI Compute Optimization
**Learning:** In repositories with frequent documentation or journal updates, CI pipelines consume unnecessary compute for non-code changes. Implementing `paths-ignore` and `cancel-in-progress` significantly reduces this waste.
**Action:** Always include `paths-ignore` for `README.md` and `.Jules/**` in CI workflows and enable `cancel-in-progress` for non-deployment jobs.
