# Sentinel's Security Journal

## 2026-08-31 - GitHub Actions Workflow Hardening and Uninitialized Repository Guard
**Vulnerability:** CI workflow executing actions with default top-level permissions, unpinned third-party actions, lack of timeouts, and unmanaged credential persistence. Additionally, CI steps failed in uninitialized repo state (missing `package.json`).
**Learning:** Default GHA settings leave CI/CD pipelines open to supply chain tampering or resource exhaustion. In repos undergoing bootstrapping, step execution must be conditionally guarded to avoid false CI failures.
**Prevention:** Always enforce `permissions: contents: read`, set job `timeout-minutes`, pin third-party actions to 40-character SHAs, set `persist-credentials: false` on checkout, and guard build/test steps with `package.json` existence checks.
