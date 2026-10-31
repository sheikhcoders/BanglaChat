# Sentinel's Journal

## 2026-10-31 - GitHub Actions CI/CD Workflow Security Hardening
**Vulnerability:** GitHub Actions workflows default to permissive token permissions if not explicitly restricted at top-level (`permissions: contents: read`), store repository credentials on disk (`persist-credentials: true` by default in `actions/checkout`), and omit execution timeouts (`timeout-minutes`). In addition, uninitialized repository states lack `package.json` / lockfiles, which causes naive `cache: npm` steps to fail builds or leak unmanaged runs.
**Learning:** Hardening CI workflows with least privilege and disabling checkout credential persistence ensures that any malicious dependencies or PR actions cannot escalate privileges or read leaked GitHub credentials from `.git/config`. Adding explicit timeouts prevents resource exhaustion and DoS attacks.
**Prevention:** Always declare top-level `permissions: contents: read`, set `persist-credentials: false` on `actions/checkout`, set `timeout-minutes: 15` on CI jobs, and guard build/test steps when running in minimal/uninitialized repo structures.
