# Sentinel Journal

## 2025-05-14 - Hardening GitHub Actions Workflows
**Vulnerability:** Use of mutable tags for GitHub Actions and overly permissive default permissions.
**Learning:** GitHub Actions should be pinned to immutable commit SHAs to prevent supply chain attacks where a compromised action tag could execute malicious code.
**Prevention:** Always use full commit SHAs for actions and define explicit, minimal permissions at the job level.
