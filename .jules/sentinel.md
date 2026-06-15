## 2026-06-14 - Hardening CI Workflows in Sparse Repositories

**Vulnerability:** CI/CD workflows (like `node.js.yml`) often lack strict security controls (e.g., pinning actions to SHAs, enforcing least privilege permissions) and are prone to failing in uninitialized or "sparse" repository states when expected files like `package.json` are missing.

**Learning:** Pinned SHAs prevent supply chain attacks via compromised action tags. Global `permissions: contents: read` enforces the principle of least privilege. In sparse repositories, job-level `if` guards (e.g., `hashFiles('package.json') != ''`) are essential to prevent noise and redundant build failures during documentation-only updates.

**Prevention:** Always pin GitHub Actions to verified commit SHAs. Define explicit job-level permissions. Implement resilient guards for environment-specific files to ensure CI only runs when the codebase is in an actionable state.
