## 2025-05-14 - CI/CD Supply Chain Hardening

**Vulnerability:** CI/CD workflows using mutable tags (e.g., `@v4`) are susceptible to supply chain attacks if the tag is moved to a malicious commit.

**Learning:** Hardening infrastructure via immutable commit SHAs and execution timeouts provides defense-in-depth against both external compromises and internal resource exhaustion.

**Prevention:** Always pin GitHub Actions to specific commit SHAs and include comments for version readability. Set explicit `timeout-minutes` and minimal `permissions` for all jobs.
