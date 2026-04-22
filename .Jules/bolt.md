# Bolt's Performance Journal - BanglaChat

## 2026-04-22 - CI Compute Optimization
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` and `concurrency: cancel-in-progress: true` is a critical performance win to prevent CI backlog and wasted compute resources.
**Action:** Always include `paths-ignore` for non-code files and enable `cancel-in-progress` for non-deployment workflows.

## 2026-04-22 - CI Robustness for Uninitialized Repositories
**Learning:** Standard CI templates often assume manifest and lockfile presence; in uninitialized repositories, these assumptions cause fatal workflow errors.
**Action:** Guard package detection, dependency installation, and execution steps with file existence checks (e.g., `hashFiles('package.json') != ''`) to maintain stability and avoid unnecessary failures.

## 2026-04-22 - Efficient Dependency Caching
**Learning:** In CI environments, always prioritize `npm ci` for performance by checking for lockfiles; use `npm install` only as a fallback for uninitialized or lockfile-less states to maintain speed and determinism.
**Action:** Implement conditional logic for cache input and installation commands based on lockfile presence.
