# Sentinel Security Journal

## 2026-10-10 - Hardened CI Workflow against Supply Chain Attacks
**Vulnerability:** CI workflow `.github/workflows/node.js.yml` lacked permission restrictions, timeouts, commit SHA pinning for third-party actions, and package existence guards.
**Learning:** Default GitHub Actions templates run with implicit write permissions and unpinned tags, making builds vulnerable to compromised upstream actions or hanging jobs.
**Prevention:** Always enforce explicit `permissions: contents: read`, set `timeout-minutes`, disable `persist-credentials`, pin third-party actions to full commit SHAs, and guard build steps against missing dependencies.
