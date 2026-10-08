# Bolt's Journal - Critical Learnings

## 2026-10-08 - CI Workflow Optimization for Minimal Repositories
**Learning:** Running full CI matrix builds or deployment pipelines on non-code changes (like markdown documentation or agent journals) wastes GitHub Actions compute time and runner capacity. Furthermore, CI workflows in uninitialized or minimal repositories fail when running package manager commands like `npm ci` without a `package.json`. Adding `paths-ignore` for non-code paths (`'**.md'`, `'.jules/**'`), `concurrency` cancellation controls (`cancel-in-progress: true`), `timeout-minutes`, and `package.json` step guards optimizes execution speed, saves compute resource credits, and prevents spurious build failures.
**Action:** Always include path filtering for docs/journals, concurrency cancellation controls, execution timeouts, and file check guards in GitHub Actions workflows.
