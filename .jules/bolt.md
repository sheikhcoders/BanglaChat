## 2026-09-24 - CI Workflow Efficiency & Bootstrap Safety
**Learning:** In uninitialized repositories or workflows without explicit file filtering, documentation updates trigger redundant multi-node matrix CI builds, and missing package-lock.json / package.json causes workflow failures.
**Action:** Always include `paths-ignore` for non-code files (`**.md`, `.jules/**`), `concurrency` cancellation controls (`cancel-in-progress: true`), `timeout-minutes: 15`, inline `package.json` step guards, and conditional dependency caching in GitHub Actions.
