# Bolt's Journal - Critical Learnings

## 2026-10-22 - CI Workflow Optimization in Minimal/Uninitialized Repositories
**Learning:** In minimal or uninitialized repositories without `package.json`, default GitHub Actions CI workflows spend compute cycles and fail or run unnecessarily on doc-only changes or redundant PR pushes.
**Action:** Always add `paths-ignore` (`**.md`, `.jules/**`), `concurrency` cancellation controls (`cancel-in-progress: true`), job timeouts (`timeout-minutes: 15`), and a `package.json` existence guard before dependency installation commands (`npm ci`).
