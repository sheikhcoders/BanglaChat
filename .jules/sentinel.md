# Sentinel's Journal - Critical Security Learnings

## 2026-11-04 - CI Workflow Hardening & Least-Privilege Scoping
**Vulnerability:** Default GitHub Actions workflow permissions can grant overly permissive tokens (`write` permissions) to workflow runs, checkout steps persist the `GITHUB_TOKEN` to runner workspace disks by default, and jobs without explicit timeouts risk infinite hangs or compute resource exhaustion.
**Learning:** In initial repository setups, workflows often omit explicit top-level `permissions: contents: read` blocks, checkout credentials persistence controls (`persist-credentials: false`), and job timeouts (`timeout-minutes`). Additionally, uninitialized repos lack package manifests, causing setup-node caching and script executions to fail unexpectedly.
**Prevention:** Always enforce explicit least-privilege permissions (`permissions: contents: read`) at workflow top-level (scoping specific write permissions only to the required jobs such as GitHub Pages deploy), disable checkout credential persistence with `persist-credentials: false`, enforce job `timeout-minutes: 15`, and guard manifest-dependent steps with file existence checks.
