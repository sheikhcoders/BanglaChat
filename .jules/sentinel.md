# Sentinel Journal - Critical Security Learnings

## 2026-06-05 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable action tags and overly permissive `GITHUB_TOKEN` in CI/CD workflows.
**Learning:** Default GitHub Actions templates often use version tags (e.g., `@v4`) which can be moved to point to malicious code. Also, `GITHUB_TOKEN` defaults can be too permissive.
**Prevention:** Pin actions to full 40-character commit SHAs and explicitly set `permissions: contents: read` to follow the principle of least privilege.
