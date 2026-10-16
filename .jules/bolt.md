# Bolt's Journal - Critical Performance Learnings

## 2026-10-16 - CI Workflow Speed & Compute Efficiency in Uninitialized Repositories
**Learning:** CI workflows often trigger on non-code changes (like documentation or journal updates) and fail on missing `package.json` in uninitialized repos, wasting compute minutes and delaying pipeline feedback.
**Action:** Always add `paths-ignore` (`'**.md'`, `'.jules/**'`), job execution timeouts (`timeout-minutes: 15`), concurrency cancellation (`cancel-in-progress: true`), and inline `package.json` existence checks before running dependency installation steps.
