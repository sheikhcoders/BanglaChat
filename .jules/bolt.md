# Bolt's Journal - Critical Performance Learnings

## 2026-10-15 - Workflow Performance Optimizations in Uninitialized Repositories
**Learning:** In repositories without an initial `package.json`, default CI setup steps (such as `cache: 'npm'` in `setup-node` or `npm ci`) fail or waste execution time trying to process non-existent package files. Adding path filters (`paths-ignore`), concurrency cancellation, timeout limits, and conditional `package.json` checks prevents wasted compute cycles and unnecessary pipeline failures.
**Action:** Always include `paths-ignore` for markdown/documentation changes, job timeouts (`timeout-minutes`), concurrency cancellation (`cancel-in-progress: true`), and `package.json` existence check guards in GitHub Actions workflows.
