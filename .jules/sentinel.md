# Sentinel Security Journal - Critical Learnings Only

## 2026-09-27 - GitHub Actions CI Workflow Least-Privilege Enforcement and Pinning
**Vulnerability:** Default GITHUB_TOKEN permissions and unpinned action tags in CI workflows enable potential supply chain attacks or elevated privilege abuse if third-party actions or dependencies are compromised.
**Learning:** Default permissions in GitHub Actions can grant implicit write access to repository resources or GITHUB_TOKEN credentials if not explicitly restricted at the top level with `permissions: contents: read`.
**Prevention:** Always declare explicit top-level `permissions: contents: read`, set `persist-credentials: false` on checkout, pin external third-party actions to immutable 40-character commit SHAs, and add step guards for missing configuration files in uninitialized environments.
