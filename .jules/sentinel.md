# Sentinel Journal - Security Insights

## 2026-09-04 - GitHub Actions CI Hardening & Uninitialized Repository Protection
**Vulnerability:** Default elevated token permissions, missing execution timeouts, persisted checkout credentials, unpinned action tags, and build failures when `package.json` is missing in uninitialized repo states.
**Learning:** Default workflow templates allow unpinned third-party actions and implicit read-write permissions, exposing CI pipelines to potential supply chain risks and runaway job execution.
**Prevention:** Always enforce `permissions: contents: read`, set `timeout-minutes: 15`, set `persist-credentials: false`, pin third-party actions to 40-character SHAs, and add inline `package.json` step guards.
