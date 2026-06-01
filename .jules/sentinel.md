## 2026-06-01 - CI/CD Supply Chain Hardening
**Vulnerability:** Potential supply chain attacks via mutable GitHub Action tags and overly permissive GITHUB_TOKEN.
**Learning:** Using tags like `@v4` for GitHub Actions is risky because tags can be moved. Explicitly defining `permissions` at the job level follows the principle of least privilege.
**Prevention:** Pin all GitHub Actions to full commit SHAs, enforce `contents: read` permissions where possible, and implement timeouts to prevent resource exhaustion.
