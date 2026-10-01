# Sentinel's Journal - Critical Security Learnings

## 2026-10-01 - GitHub Actions Supply Chain & Workflow Permission Hardening
**Vulnerability:** Unpinned third-party GitHub Actions and missing top-level permissions in CI workflows permit potential supply chain code manipulation and excessive GITHUB_TOKEN privileges.
**Learning:** Default GitHub Actions configurations lack explicit read-only permissions and exact commit SHA pinning, exposing uninitialized repositories to dependency hijacking and unconstrained execution timeouts.
**Prevention:** Enforce top-level `permissions: contents: read`, pin all third-party actions to explicit 40-character commit SHAs, disable credential persistence, and set `timeout-minutes: 15` across all CI workflow files.
