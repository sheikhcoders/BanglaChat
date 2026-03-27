## 2025-05-14 - GitHub Actions Hardening & Bootstrap Guards
**Vulnerability:** Supply chain risk via mutable Action tags and potential CI failures/resource exhaustion in uninitialized repositories.
**Learning:** Using immutable commit SHAs for Actions is a critical defense-in-depth measure. Additionally, in repositories that might be uninitialized (missing `package.json`), "Bootstrap Guards" using `if: hashFiles('package.json') != ''` and fallback artifact directories prevent unnecessary CI failures and noise.
**Prevention:** Always pin Actions to SHAs and implement job-level guards for scripts that depend on manifest files.
