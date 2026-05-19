
## 2026-05-19 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable tags for GitHub Actions and overly permissive default GITHUB_TOKEN permissions.
**Learning:** Default GitHub Actions configurations often prioritize convenience over security, leading to potential supply chain risks if actions are compromised or tokens are exfiltrated.
**Prevention:** Always pin actions to full-length commit SHAs, explicitly define minimal job-level permissions, and disable credential persistence in checkout steps.
