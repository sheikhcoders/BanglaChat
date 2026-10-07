# Bolt's Journal - Critical Learnings

## 2026-10-08 - CI Workflow Efficiency & Uninitialized Repository Guarding
**Learning:** In uninitialized repositories without `package.json` or `package-lock.json`, running `npm ci` or standard caching steps in GitHub Actions causes immediate job failures. Additionally, redundant workflow triggers on documentation updates (`.md`, `.jules/**`) consume unnecessary GitHub Actions runner minutes.
**Action:** Always include `paths-ignore` (`'**.md'`, `'.jules/**'`) in workflow triggers, enforce concurrency cancellation (`cancel-in-progress: true`), set execution timeouts (`timeout-minutes: 15`), and add inline step guards checking for `package.json` before running Node build/test commands.
