# Sentinel Journal - Critical Security Learnings

## 2026-09-27 - GitHub CI Workflow Hardening & Least Privilege
**Vulnerability:** Default GitHub Actions permissions and unpinned action dependencies posed potential supply chain and workflow privilege escalation risks.
**Learning:** Workflows without explicit top-level read-only permissions and commit-pinned SHA references can inherit elevated default permissions or suffer from compromised third-party action releases.
**Prevention:** Always enforce `permissions: contents: read`, set job timeouts (`timeout-minutes: 15`), disable credential persistence (`persist-credentials: false`), and pin third-party actions to explicit 40-character commit SHAs.
