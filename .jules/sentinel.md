## 2026-06-16 - [CI/CD Hardening & Sparse Repo Resilience]
**Vulnerability:** Use of mutable version tags in GitHub Actions and over-permissive default permissions. Lack of timeouts on CI jobs.
**Learning:** In repositories that undergo frequent resets or exist in a sparse state, CI workflows must not only be secure (pinned SHAs, least privilege) but also resilient to missing manifests (`package.json`) to prevent noise and build failures during documentation-only updates.
**Prevention:** Always pin actions to full-length commit SHAs. Enforce global `permissions: contents: read` and specific job-level permissions. Implement `has_package` output logic or `hashFiles` guards to skip Node.js steps when uninitialized.
