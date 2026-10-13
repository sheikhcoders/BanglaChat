# Bolt's Journal - Critical Performance Learnings

## 2026-10-12 - CI Workflow Efficiency in Uninitialized/Minimal Repositories
**Learning:** CI workflows running on non-code updates (e.g. documentation, agent journals) waste substantial GitHub Actions compute quota. Additionally, in minimal/uninitialized repositories lacking a `package.json`, default `npm ci` / `setup-node` cache steps fail or run redundantly.
**Action:** Always configure `paths-ignore` (`'**.md'`, `'.jules/**'`) and `concurrency.cancel-in-progress: true` in GitHub Actions workflows, set execution timeouts (`timeout-minutes: 15`), and guard node steps with `package.json` existence checks.
