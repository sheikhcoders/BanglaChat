## 2026-06-10 - [CI/CD Hardening Persistence]
**Vulnerability:** Weak CI/CD configuration (mutable tags, over-privileged tokens, no timeouts).
**Learning:** In GitHub Actions, job-level `permissions` replace global ones. Hardening global permissions requires re-declaring necessary write scopes (like `pages: write`) in specific jobs to prevent deployment failures.
**Prevention:** Always verify job-level permission requirements when restricting global `GITHUB_TOKEN` scopes and use commit SHAs for supply chain security.
