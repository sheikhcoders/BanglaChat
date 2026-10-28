# Sentinel Security Journal

## 2026-10-28 - Least Privilege Scoping and Credential Protection in CI Workflows
**Vulnerability:** Default GitHub Actions permissions can grant write access to repository contents, and default `actions/checkout` persists GitHub tokens in local git config, risking token leakage or unauthorized repository modification if runner steps or third-party actions are compromised.
**Learning:** In minimal or uninitialized repositories, default permissions and unconstrained action execution present elevated attack vectors and failure points.
**Prevention:** Always enforce explicit top-level `permissions: contents: read`, set `persist-credentials: false` on `actions/checkout`, add job execution timeouts (`timeout-minutes: 15`), and guard package-manager execution steps with repository state checks.
