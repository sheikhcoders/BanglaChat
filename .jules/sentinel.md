# Sentinel Security Journal

## 2026-10-16 - Hardening CI Workflows in Uninitialized Repositories
**Vulnerability:** Default CI workflows without explicit GITHUB_TOKEN permissions or credential management can leak tokens or run indefinitely on hanging processes, while failing on uninitialized repo states without package.json.
**Learning:** Default GitHub Actions workflows lack least-privilege scoping and job timeouts by default.
**Prevention:** Always enforce `permissions: contents: read`, `persist-credentials: false`, `timeout-minutes`, and check for file existence before executing package manager commands.
