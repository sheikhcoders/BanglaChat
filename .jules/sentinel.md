# Sentinel Journal - Critical Learnings

## 2026-10-12 - CI/CD Pipeline Least-Privilege & Action Pinning
**Vulnerability:** Unpinned third-party GitHub Actions and default GitHub token write permissions expose CI workflows to supply chain attacks and credential leaks.
**Learning:** Workflows in uninitialized or minimal repository states must set `permissions: contents: read`, `persist-credentials: false`, `timeout-minutes: 15`, and pin commit SHAs (`actions/checkout` v4.2.2 SHA `11bd71901bbe5b1630ceea73d27597364c9af683` & `actions/setup-node` v4.2.0 SHA `1d0ff469b7ec7b3cb9d8673fde0c81c44821de2a`) with step guards for `package.json`.
**Prevention:** Always enforce strict workflow permissions, immutable action pin SHAs, and credential leakage controls across all workflow YAML files.
