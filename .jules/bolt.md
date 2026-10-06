# Bolt's Journal - Critical Learnings

## 2026-10-06 - CI Workflow Performance & Compute Optimization
**Learning:** CI pipelines frequently consume unnecessary compute and delay feedback loops when triggered on documentation-only updates, or when stale PR commits continue running concurrently. Adding `paths-ignore` for non-code paths (`**.md`, `.jules/**`), `concurrency` controls with `cancel-in-progress: true`, explicit job timeouts, and package existence guard checks eliminates redundant pipeline runs while ensuring fast failure modes.
**Action:** Always apply `paths-ignore`, `concurrency` cancellation, `timeout-minutes: 15`, and step guards to GitHub Actions workflows in uninitialized or early-stage projects.
