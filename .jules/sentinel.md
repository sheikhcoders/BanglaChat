## 2025-05-14 - GitHub Actions Hardening Pattern
**Vulnerability:** Over-privileged GITHUB_TOKEN and persistent credentials in CI/CD runners.
**Learning:** Default GitHub Actions configurations often leave `persist-credentials` enabled and provide broad permissions to the `GITHUB_TOKEN`. This can be exploited by malicious dependencies or compromised build steps to exfiltrate tokens or modify the repository.
**Prevention:**
1. Always set `persist-credentials: false` in `actions/checkout` unless git push operations are explicitly required.
2. Use top-level or job-level `permissions` to enforce the principle of least privilege.
3. Implement `timeout-minutes` to prevent resource exhaustion and long-running malicious processes.
4. Use branch-aware `concurrency` groups to cancel redundant runs securely.
