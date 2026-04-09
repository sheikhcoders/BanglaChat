## 2026-04-09 - Supply Chain Hardening for GitHub Actions
**Vulnerability:** GitHub Actions using mutable tags (e.g., @v4) are susceptible to supply chain attacks if the tag is compromised or repointed.
**Learning:** Pinning actions to full-length commit SHAs provides immutable builds and protects against unauthorized code changes in dependencies.
**Prevention:** Always pin GitHub Actions to verified commit SHAs and include the version as a comment for maintainability.
