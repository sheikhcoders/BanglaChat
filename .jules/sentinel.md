# Sentinel's Security Journal - BanglaChat

## 2026-05-22 - CI/CD Supply Chain Hardening
**Vulnerability:** Over-permissive default GITHUB_TOKEN and use of mutable action tags in CI workflows.
**Learning:** Default CI configurations often lack explicit permission scopes and rely on mutable tags (like `@v4`), which can be hijacked if the action is compromised.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs, set explicit `permissions` at the job level, and disable credential persistence in checkouts to minimize the attack surface.
