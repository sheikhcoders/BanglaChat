## 2026-04-27 - CI Compute Optimization via Path Filtering and Concurrency
**Learning:** CI compute time can be significantly reduced by ignoring non-code changes (README, journals) and cancelling redundant builds for the same branch/PR.
**Action:** Always include `paths-ignore` for documentation and implement `concurrency` with `cancel-in-progress: true` in GitHub Actions workflows to preserve resources and provide faster feedback.

## 2026-04-27 - CI Resilience in Uninitialized Repositories
**Learning:** GitHub Actions workflows often fail fatally in uninitialized repositories (missing `package.json` or lockfiles) when caching or install steps are not guarded.
**Action:** Use manifest existence guards (e.g., `hashFiles('package.json') != ''`) and ensure setup actions have conditional caching logic to prevent wasteful CI failures during project bootstrapping.
