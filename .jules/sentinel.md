## 2025-05-15 - Hardening CI/CD workflows for defense-in-depth

**Vulnerability:** Supply chain risks through mutable GitHub Action tags and potential resource exhaustion from redundant/hung CI processes.

**Learning:** Using tags like `@v4` for GitHub Actions is convenient but carries the risk of the tag being moved to a malicious commit or an unexpected breaking change. Furthermore, unconstrained CI runs can lead to unnecessary resource consumption and billing.

**Prevention:** Always pin GitHub Actions to their immutable commit SHAs. Implement explicit `permissions` at the job or workflow level to follow the principle of least privilege. Use `concurrency` with `cancel-in-progress` to manage redundant runs, and set `timeout-minutes` to prevent runaway processes.

## 2025-05-15 - Robust CI for Uninitialized Repositories

**Vulnerability:** False positive CI failures in uninitialized repositories causing noise and obscuring real security/quality signals.

**Learning:** Standard CI templates (like those for Node.js or Next.js) often assume a `package.json` or lockfile exists. In early-stage or experimental repositories, these files might be missing, leading to `npm ci` or build tool failures.

**Prevention:** Implement "Smart Pre-check" (checking for `package.json` before running the matrix) and "Bootstrap Guard" (making build/deploy steps conditional on detecting a package manager) to ensure CI remains green until actual code is introduced.
