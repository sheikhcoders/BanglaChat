## 2026-05-24 - [CI Hardening]
**Vulnerability:** CI/CD workflows using mutable action tags (e.g., @v4) and default high-privilege permissions (e.g., persisting GITHUB_TOKEN) are susceptible to supply chain attacks and credential leaks.
**Learning:** Hardening CI/CD from the start by pinning actions to commit SHAs, enforcing minimal permissions, and setting job timeouts significantly improves the security posture with minimal overhead.
**Prevention:** Always pin actions to full-length commit SHAs and explicitly define the minimum required permissions (e.g., contents: read) in all GitHub Actions workflows.
