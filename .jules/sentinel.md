# Sentinel Journal 🛡️

## 2026-05-27 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable tags for GitHub Actions and overly permissive `GITHUB_TOKEN` permissions.
**Learning:** Using tags like `@v4` can lead to supply chain attacks if the tag is moved to a malicious commit. Default `GITHUB_TOKEN` permissions can be too broad.
**Prevention:** Pin actions to full commit SHAs and explicitly define minimal `permissions` in workflow files.
