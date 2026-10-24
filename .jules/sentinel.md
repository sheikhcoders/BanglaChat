# Sentinel Security Journal

## 2026-10-24 - GitHub Actions Hardening in Minimal/Uninitialized Repositories
**Vulnerability:** Default GitHub Actions permissions and credential persistence (`persist-credentials: true`) allow potential token leakage or elevated repository write access during workflow execution. Additionally, missing job timeouts risk runner resource exhaustion, and `setup-node` caching without a lockfile fails the build.
**Learning:** Default CI workflow templates generated for new or uninitialized repositories often omit explicit least-privilege `permissions` blocks, `persist-credentials: false` on checkout actions, and job `timeout-minutes`. Furthermore, using `cache: npm` in `actions/setup-node` without a `package-lock.json` causes CI pipeline failure.
**Prevention:** Always enforce explicit top-level read-only permissions (`permissions: contents: read`), disable git credential persistence (`persist-credentials: false`), define job execution timeouts (`timeout-minutes: 15`), and guard dependency commands with `package.json` checks without enforcing `cache: npm` when lockfiles are missing.
