# Sentinel's Journal - Critical Security Learnings

## 2026-11-10 - CI Workflow Hardening in Early-Stage Repositories
**Vulnerability:** Default GitHub Actions workflows execute with default repository permissions, persist GITHUB_TOKEN credentials on runner disk, lack execution timeouts, and fail abruptly when dependencies or package.json files are not yet committed.
**Learning:** In repositories prior to initial frontend/backend scaffolding, boilerplate CI workflows risk credential leakage to compromised actions/scripts, unbounded runner resource exhaustion (DoS), and broken CI runs due to caching configurations expecting a lockfile (`cache: 'npm'`).
**Prevention:** Always enforce explicit least-privilege `permissions: contents: read` (overriding only specific jobs like GitHub Pages deployment), set `persist-credentials: false` on `actions/checkout`, set explicit `timeout-minutes: 15`, and guard dependency/build steps with `hashFiles('package.json') != ''`.
