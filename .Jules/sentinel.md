# Sentinel's Journal - Critical Security Learnings

## 2026-06-23 - [Initial Hardening]
**Vulnerability:** GitHub Actions workflows used mutable tags and lacked explicit permissions, exposing the repository to supply chain attacks and potential token leakage.
**Learning:** Default workflow templates often prioritize ease of use over security, requiring manual hardening in uninitialized repositories.
**Prevention:** Always pin actions to immutable commit SHAs and enforce global least-privilege permissions.
