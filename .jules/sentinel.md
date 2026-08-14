# Sentinel Critical Security Journal

## 2026-08-07 - GHA Supply Chain Hardening & Uninitialized Workflow Defense
**Vulnerability:** Default CI workflows execute with full token permissions, mutable tag references, unconstrained timeouts, and persistent git credentials, while failing on uninitialized package manifests.
**Learning:** Default GitHub Actions templates lack essential defense-in-depth protections and break on empty repository states unless guarded conditionally.
**Prevention:** Always enforce read-only GITHUB_TOKEN scope (`permissions: contents: read`), set `timeout-minutes: 15`, pin third-party actions to 40-character SHAs, set `persist-credentials: false`, and guard setup steps with `package.json` existence checks.
