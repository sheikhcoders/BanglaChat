# Bolt's Journal - Critical Learnings

## 2026-09-09 - CI/CD Pipeline Efficiency & Cancellation Rules
**Learning:** In early-stage or uninitialized repositories, running matrix CI builds across multiple Node.js versions on documentation/markdown commits wastes GitHub Actions compute time and queue capacity. Adding `paths-ignore` for non-code files, `concurrency` with `cancel-in-progress: true`, and an inline `package.json` existence guard step prevents redundant workflow runs and handles uninitialized repo states without job scheduling overhead.
**Action:** Always include `paths-ignore`, `concurrency`, `timeout-minutes`, and step guards in GitHub Actions workflows.
