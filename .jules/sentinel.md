# Sentinel Security Journal

## 2026-10-31 - CI Workflow Hardening: Least-Privilege Scoping, Credential Protection, and Execution Timeouts
**Vulnerability:** Default CI workflows in GitHub Actions run with excessive repository permissions (often write by default if not constrained) and persist repository access tokens in runner local git config during checkout, exposing tokens to potential downstream compromise. Furthermore, omitting execution timeouts allows hung or compromised jobs to consume runner minutes indefinitely.
**Learning:** In initial/minimal repository structures, workflows like `node.js.yml` and `nextjs.yml` lack explicit `permissions` declarations, `timeout-minutes`, and `persist-credentials: false` on `actions/checkout@v4`. Scoping top-level permissions to `contents: read` while preserving explicit permissions on deployment jobs (e.g., `pages: write`, `id-token: write`) ensures least-privilege without breaking GitHub Pages deployments.
**Prevention:** Always declare top-level read-only permissions (`permissions: contents: read`), set explicit job timeouts (`timeout-minutes: 15`), and disable token persistence (`persist-credentials: false`) on all checkout steps.
