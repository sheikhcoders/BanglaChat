## 2026-04-24 - CI Optimization for Uninitialized Repositories
**Learning:** Uninitialized repositories with CI workflows configured for specific package managers lead to 100% failure rate and wasted compute; implementing conditional guards and path ignores for documentation saves significant resources during the early bootstrap phase.
**Action:** Always include `paths-ignore` for documentation and use conditional checks for manifest files (`package.json`, `package-lock.json`) in CI templates to ensure they "fail fast" or skip gracefully in empty project states.
