## 2025-05-15 - Hardening CI/CD workflows for defense-in-depth

**Vulnerability:** Supply chain risks through mutable GitHub Action tags and potential resource exhaustion from redundant/hung CI processes.

**Learning:** Using tags like `@v4` for GitHub Actions is convenient but carries the risk of the tag being moved to a malicious commit or an unexpected breaking change. Furthermore, unconstrained CI runs can lead to unnecessary resource consumption and billing.

**Prevention:** Always pin GitHub Actions to their immutable commit SHAs. Implement explicit `permissions` at the job or workflow level to follow the principle of least privilege. Use `concurrency` with `cancel-in-progress` to manage redundant runs, and set `timeout-minutes` to prevent runaway processes.
