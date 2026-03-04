## 2025-05-14 - CI Efficiency in Uninitialized Repositories
**Learning:** Running full CI matrices and deployment builds in repositories without a `package.json` or lockfile wastes significant CI runner minutes and increases feedback latency.
**Action:** Implement conditional job/step execution in GitHub Actions that detects the presence of core manifest files before launching expensive builds or matrices.
