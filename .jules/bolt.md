# Bolt's Journal - Critical Learnings

## 2026-10-17 - CI Workflow Optimization in Uninitialized Repositories
**Learning:** CI workflows in repos without `package.json` fail on `npm ci` / `npm test`, wasting compute runner time. Adding path-ignore filters (`'**.md'`, `'.jules/**'`), concurrency cancellation (`cancel-in-progress: true`), job timeouts (`timeout-minutes: 15`), and inline `package.json` check guards prevents wasteful CI execution and avoids build failures.
**Action:** Always include path filters for documentation/metadata updates, enforce concurrency control and job execution timeouts, and add `package.json` existence guards in Node CI workflows.
