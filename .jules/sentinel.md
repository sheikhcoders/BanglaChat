# Sentinel Security Journal

## 2026-09-02 - GitHub Actions Workflow Hardening in Uninitialized Repositories
**Vulnerability:** CI workflows executing on uninitialized repositories without explicit permissions allow default read/write access to GITHUB_TOKEN and can fail on missing lockfiles/dependencies.
**Learning:** Default GITHUB_TOKEN permissions grant broad access if unconstrained, and setup-node action fails when expecting `package-lock.json` in a repository without `package.json`.
**Prevention:** Always declare top-level and job-level `permissions: contents: read`, `timeout-minutes: 15`, `persist-credentials: false`, and guard dependency/build steps with an inline `package.json` existence check.
