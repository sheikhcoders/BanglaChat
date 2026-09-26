# Sentinel's Journal 🛡️

Critical security learnings and codebase-specific patterns.

## 2026-09-26 - GitHub Workflow Hardening and Security Policy
**Vulnerability:** Loose permissions, unpinned GitHub Actions, missing job timeouts, and default credential persistence in CI workflow posed supply-chain attack risks.
**Learning:** In uninitialized or light repositories, workflow files still present supply-chain vectors if actions are tag-pinned or run with elevated permissions.
**Prevention:** Always enforce `permissions: contents: read`, `timeout-minutes: 15`, `persist-credentials: false`, and exact 40-character commit SHAs for third-party actions alongside package.json step guards.
