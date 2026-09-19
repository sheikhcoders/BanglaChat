## 2026-09-19 - CI/CD Pipeline Performance Optimization for Uninitialized Repositories

**Learning:** Running full CI matrices and deployment jobs on non-code changes (such as Markdown documentation or agent journal updates) unnecessarily consumes GitHub Actions compute minutes and increases developer feedback latency. Furthermore, setup-node cache configurations fail when repositories are uninitialized or lack a `package-lock.json` lockfile.
**Action:** Always filter out non-code paths (`'**.md'`, `'.jules/**'`) in workflow triggers, configure top-level `concurrency` with `cancel-in-progress: true` for PRs/branches, set explicit `timeout-minutes` on jobs, and use `package.json` existence step guards before attempting `setup-node` caching or `npm` installations.
