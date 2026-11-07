# Sentinel Security Journal

## 2026-11-07 - CI/CD Workflow Hardening in Early-Stage Repositories
**Vulnerability:** Default CI workflows in `.github/workflows/` lacked top-level least-privilege permission boundaries, omitted checkout credential isolation (`persist-credentials: false`), and had no job execution timeouts (`timeout-minutes`), introducing credential compromise and DoS/resource-exhaustion risks.
**Learning:** Repositories initialized with boilerplate GitHub Actions workflows often inherit implicit read/write permissions and unconstrained job execution limits. Furthermore, in uninitialized repository states, steps attempting package manager operations without guards cause CI failures.
**Prevention:** Always enforce `permissions: contents: read` at the workflow root, configure `persist-credentials: false` on `actions/checkout`, set explicit `timeout-minutes: 15` on jobs, and verify package configuration files exist before running build/test runners.
