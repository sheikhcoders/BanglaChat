# Sentinel Security Journal

## 2026-10-04 - GitHub Actions CI Hardening & Guard Checks

**Vulnerability:** Default CI workflows had unconstrained permissions, missing timeouts, implicit credential persistence, unpinned third-party action refs, and failed on uninitialized repository states when package.json was missing.
**Learning:** Default GitHub Actions templates omit least-privilege permissions and execution guards, exposing workflows to secret leakage, dangling build resource consumption, and runner execution failures in template/empty repos.
**Prevention:** Always enforce `permissions: contents: read`, set `timeout-minutes`, disable `persist-credentials` on checkout, pin third-party actions to 40-character commit SHAs, and add inline `package.json` existence guard steps.
