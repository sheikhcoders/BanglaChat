## 2025-12-11 - CI/CD Hardening
**Vulnerability:** Use of mutable GitHub Action tags and overly permissive default permissions in CI workflows, which could lead to supply chain compromises or unauthorized repository access.
**Learning:** Pinning actions to immutable commit SHAs and explicitly defining minimal permissions (least privilege) significantly reduces the attack surface for CI/CD pipelines.
**Prevention:** Always use specific commit SHAs for third-party actions and set top-level `permissions` as a baseline for all workflows.

## 2025-12-11 - Permissions for GitHub Pages
**Vulnerability:** Setting global `permissions: contents: read` without including necessary scopes for deployment jobs causes workflow failures.
**Learning:** GitHub Pages deployment requires `pages: write` and `id-token: write` permissions. When defining top-level permissions, all necessary scopes for all jobs must be included.
**Prevention:** Carefully audit all jobs in a workflow to ensure that the global `permissions` block covers all required scopes, or define permissions at the job level.
