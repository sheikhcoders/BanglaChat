# Bolt's Performance Journal

## 2026-09-30 - CI Workflow Optimization for Uninitialized Repositories & Non-Code Commits
**Learning:** Running CI workflows on non-code changes (such as `.md` file updates) or in uninitialized repository states (where `package.json` does not yet exist) wastes compute minutes and causes unnecessary workflow failures. Adding `paths-ignore` filters for markdown/documentation files, concurrency controls with `cancel-in-progress: true`, job timeouts, and `package.json` step guards optimizes execution speed and compute efficiency while preventing false-failure alerts.
**Action:** Always include `paths-ignore` for `**.md` and `.jules/**`, add `concurrency` groups with `cancel-in-progress: true`, enforce `timeout-minutes`, and add `package.json` existence check steps in GitHub Actions workflows.
