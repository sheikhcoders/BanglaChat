# Bolt's Performance Journal - Critical Learnings

## 2026-09-27 - CI Workflow Optimization for Minimal & Uninitialized Repositories
**Learning:** Running full CI matrix builds on non-code changes (such as Markdown updates) wastes compute resources and slows down feedback loops. Additionally, in repositories without `package.json`, default `npm ci` commands fail, causing unnecessary build failures and resource waste.
**Action:** Always add `paths-ignore` filters for non-code files (`**.md`, `.jules/**`), set `concurrency` cancellation controls (`cancel-in-progress: true`), apply a safety `timeout-minutes: 15`, and check for `package.json` existence before triggering `npm` commands.
