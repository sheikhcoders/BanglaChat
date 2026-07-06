## 2026-07-06 - CI Workflow Hardening for Uninitialized Repositories
**Vulnerability:** CI/CD workflows (GitHub Actions) using mutable tags (e.g., @v4) and overly permissive default permissions.
**Learning:** In uninitialized repositories, the primary security focus is infrastructure hardening. Using mutable tags exposes the pipeline to supply chain attacks if a tag is compromised. Lack of explicit timeouts and manifest guards can lead to resource exhaustion and noisy CI failures in early project stages.
**Prevention:** Always pin third-party actions to immutable commit SHAs, enforce global `permissions: contents: read` for least privilege, add `timeout-minutes` to jobs, and use `if: hashFiles('package.json') != ''` guards to handle uninitialized states gracefully.
