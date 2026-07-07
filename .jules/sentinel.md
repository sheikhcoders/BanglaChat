## 2026-07-07 - CI Infrastructure Hardening
**Vulnerability:** Supply chain risk from floating action tags and potential resource exhaustion in uninitialized repositories.
**Learning:** In repositories without an initial `package.json`, standard CI workflows fail and consume runner minutes needlessly; pinning actions to SHAs and enforcing timeouts provides a baseline of security and resilience.
**Prevention:** Always pin GitHub Actions to immutable SHAs, enforce job-level timeouts, and use manifest existence guards (`if: hashFiles('package.json') != ''`) in early-stage projects.
