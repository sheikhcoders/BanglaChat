## 2025-03-21 - CI Hardening and Bootstrap Guards
**Vulnerability:** CI/CD workflows using mutable action tags (e.g., `@v4`) are susceptible to supply chain attacks if the upstream tag is moved to a malicious commit. Additionally, workflows in uninitialized repositories can fail due to missing manifest files (e.g., `package.json`), causing unnecessary friction.
**Learning:** Pinning actions to immutable commit SHAs is a critical "Defense in Depth" measure. Implementing "Bootstrap Guards" (conditional steps based on file presence) prevents CI noise in early project stages while maintaining security.
**Prevention:** Always pin GitHub Actions to commit SHAs and use `if: hashFiles('package.json') != ''` patterns to guard execution steps in volatile or uninitialized environments.
