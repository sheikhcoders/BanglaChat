# Sentinel Security Journal

## 2026-09-07 - GitHub Actions CI/CD Hardening & State Guards
**Vulnerability:** Default workflow token permissions, missing step execution timeouts, unpinned third-party action refs, and unhandled uninitialized repo states in `node.js.yml` allowed potential supply chain compromises and CI build failures.
**Learning:** GitHub Actions defaults permit broad scopes and can fail when standard files like `package.json` are absent in initial repository bootstraps.
**Prevention:** Enforce `permissions: contents: read`, set `timeout-minutes`, pin action SHAs, set `persist-credentials: false`, and add conditional file checks (`steps.check_files.outputs.has_package_json`).
