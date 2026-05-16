## 2026-05-16 - GitHub Actions Supply Chain Hardening
**Vulnerability:** Use of mutable GitHub Action tags (e.g., `@v4`) in CI/CD workflows.
**Learning:** Using tags like `@v4` allows the action provider or a compromised account to push malicious code to that tag, which would be automatically executed in our CI/CD environment. Pinning to a specific commit SHA ensures that we are running exactly the code we expect.
**Prevention:** Always pin GitHub Actions to a full-length commit SHA and include a comment with the human-readable version for maintainability.
