# Sentinel's Journal - Critical Security Learnings

## 2026-09-24 - CI/CD Workflow Hardening
**Vulnerability:** Default GitHub Actions permissions and unpinned action dependencies posed supply chain and privilege escalation risks.
**Learning:** Default GITHUB_TOKEN permissions permit repository writes if not scoped down at the top level, and floating action tags can lead to untrusted execution if compromised upstream.
**Prevention:** Enforce `permissions: contents: read`, `persist-credentials: false`, set `timeout-minutes: 15`, and pin all third-party GitHub Actions to 40-character commit SHAs across CI workflows.
