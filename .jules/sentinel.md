# Sentinel Journal - Critical Learnings

## 2026-10-09 - Hardening GitHub Actions CI Workflows in Uninitialized Repositories

**Vulnerability:** Default GitHub Actions workflows run with excess permissions, lack execution timeouts, use mutable tag references for third-party actions, and fail when `package.json` is missing in uninitialized repositories.

**Learning:** GitHub Actions defaults can allow job execution hijacking via compromised third-party actions, credentials persistence across steps, or runaway job billing. Moreover, uninitialized repositories without `package.json` break CI runs unless guarded.

**Prevention:** Always enforce explicit top-level `permissions: contents: read`, set `timeout-minutes: 15`, disable `persist-credentials`, pin third-party actions to 40-character commit SHAs, and add inline `package.json` existence checks before running `npm` commands.
