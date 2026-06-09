## 2026-06-08 - Hardening CI/CD Workflows for Uninitialized Repositories
**Vulnerability:** Supply chain attacks via mutable tags in GitHub Actions and overly permissive default GITHUB_TOKEN permissions.
**Learning:** In a repository's initial state (sparse or uninitialized), standard workflows often fail when they expect project-specific files (like `package.json`).
**Prevention:**
1. Pin all actions to verified commit SHAs.
2. Enforce `permissions: contents: read` globally.
3. Use `timeout-minutes: 15` to prevent resource exhaustion.
4. Implement step-level guards using `if: hashFiles('package.json') != ''` or similar logic to handle the absence of project files gracefully while maintaining a secure baseline.
