## 2026-07-01 - CI/CD Hardening in Uninitialized Repositories
**Vulnerability:** Supply chain attacks via mutable action tags and potential resource exhaustion from unconstrained jobs.
**Learning:** In the earliest stages of a project's lifecycle, the GitHub Actions infrastructure is the most significant attack surface.
**Prevention:** Always pin actions to immutable SHAs, enforce global 'permissions: contents: read', and implement job-level timeouts from the outset to establish a secure baseline.
