## 2026-04-27 - CI Compute Optimization via Path Filtering and Concurrency
**Learning:** CI compute time can be significantly reduced by ignoring non-code changes (README, journals) and cancelling redundant builds for the same branch/PR.
**Action:** Always include `paths-ignore` for documentation and implement `concurrency` with `cancel-in-progress: true` in GitHub Actions workflows to preserve resources and provide faster feedback.
