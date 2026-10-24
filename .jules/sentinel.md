# Sentinel Security Journal

## 2026-10-24 - GitHub Actions Hardening in Minimal/Uninitialized Repositories
**Vulnerability:** Default GitHub Actions permissions and credential persistence (`persist-credentials: true`) allow potential token leakage or elevated repository write access during workflow execution. Additionally, missing job timeouts risk runner resource exhaustion.
**Learning:** Default CI workflow templates generated for new or uninitialized repositories often omit explicit least-privilege `permissions` blocks, `persist-credentials: false` on checkout actions, and job `timeout-minutes`.
**Prevention:** Always enforce explicit top-level read-only permissions (`permissions: contents: read`), disable git credential persistence (`persist-credentials: false`), and define job execution timeouts (`timeout-minutes: 15`) across all workflow templates.
