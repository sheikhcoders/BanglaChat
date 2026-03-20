## 2026-03-20 - CI/CD Hardening & Security Reporting

**Vulnerability:** Workflows were using mutable tags (e.g., `@v4`) for actions, lacked resource usage controls (timeouts/concurrency), and did not specify job-level permissions.

**Learning:** Pinning actions to immutable commit SHAs protects against supply chain attacks where a tagged version might be overwritten with malicious code. Implementing `timeout-minutes` and `concurrency` guards against resource exhaustion and denial-of-service in CI.

**Prevention:** Always pin GitHub Actions to full 40-character commit SHAs. Define minimal required permissions at the job level. Use `timeout-minutes` to prevent hung jobs from consuming all runner minutes.
