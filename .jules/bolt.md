## 2026-10-25 - CI Workflow Optimization in Minimal/Uninitialized Repositories

**Learning:** In repositories without full application code or `package.json`, default CI workflows fail or waste compute resources on non-code changes (e.g. documentation edits). Using `paths-ignore` (`**.md`, `.jules/**`), setting concurrency `cancel-in-progress: true`, applying `timeout-minutes: 15`, and adding package.json existence guards saves CI build minutes and prevents unnecessary build failures.

**Action:** Always configure `paths-ignore`, `cancel-in-progress`, `timeout-minutes`, and package.json check guards in GitHub Actions workflows.
