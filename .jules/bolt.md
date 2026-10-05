## 2026-10-05 - CI Workflow Compute Efficiency and Execution Controls

**Learning:** Running full CI workflows on documentation-only changes (`**.md`, `.jules/**`) wastes GitHub Actions compute resources and runner queue time. Adding `paths-ignore` filters, `concurrency` cancellation for superseded PR builds, and `timeout-minutes` controls ensures efficient, safe CI execution while leveraging `setup-node` native `cache: 'npm'` dependency caching.

**Action:** Always configure `paths-ignore` for non-code files (`**.md`, `.jules/**`), set `concurrency: { cancel-in-progress: true }`, enforce job timeouts (`timeout-minutes: 15`), and use native `setup-node` dependency caching in GitHub Actions workflows.
