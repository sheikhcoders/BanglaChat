## 2026-04-07 - CI Performance Optimization
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` and `concurrency: cancel-in-progress: true` is a critical performance win to prevent CI backlog and wasted compute resources.
**Action:** Always check if `paths-ignore` for non-code files and `concurrency` guards are implemented in GitHub Actions workflows.

## 2026-04-09 - CI Hardening for Uninitialized Repositories
**Learning:** GitHub Actions workflows in uninitialized repositories (missing `package.json` or lockfiles) require hardening with conditional logic (`if: hashFiles('package.json') != ''`) and fallback artifact mechanisms (e.g., an empty directory) to prevent CI failures during the initial bootstrap phase.
**Action:** Implement job-level guards and conditional caching/dependency installation steps in CI workflows to ensure stability before the repository is fully set up.
