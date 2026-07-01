## 2026-07-01 - CI/CD Hardening in Uninitialized Repositories
**Vulnerability:** Supply chain attacks via mutable action tags and potential resource exhaustion from unconstrained jobs.
**Learning:** In the earliest stages of a project's lifecycle, the GitHub Actions infrastructure is the most significant attack surface.
**Prevention:** Always pin actions to immutable SHAs, enforce global 'permissions: contents: read', and implement job-level timeouts from the outset to establish a secure baseline.

## 2026-07-01 - CI Resilience in Uninitialized Repositories
**Vulnerability:** CI/CD pipeline termination due to missing dependency manifests.
**Learning:** Standard boilerplate workflows (like Next.js/Node.js) often assume a manifest exists, causing early failures in greenfield projects.
**Prevention:** Implement manifest existence guards (`if: hashFiles(...)`) and conditional caching to ensure CI remains passing even before the first commit of application code.
