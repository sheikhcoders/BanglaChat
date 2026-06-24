## 2026-06-24 - CI Efficiency in Sparse Repositories
**Learning:** In uninitialized repositories (missing package.json), standard CI workflows will fail by default, wasting compute. Furthermore, documentation-only changes shouldn't trigger expensive CI runs.
**Action:** Implement job-level guards (hashFiles) and paths-ignore rules to prevent unnecessary resource consumption.

## 2026-06-24 - CI Reliability vs. Efficiency
**Learning:** Suppressing CI failures using job-level guards (e.g., hashFiles) can hide critical misconfigurations (like a missing package.json). Furthermore, overriding concurrency safety settings in deployment workflows can lead to race conditions.
**Action:** Prioritize failure visibility and safety over micro-efficiency in CI. Only implement efficiency measures (like paths-ignore) that do not impact the reliability of the pipeline.

## 2026-06-24 - CI Resilience & Performance
**Learning:** GitHub Actions like setup-node with caching enabled will fail if the required lock file is missing. In sparse/uninitialized repos, this causes persistent failures. Furthermore, infrastructure changes (like workflow updates) should be excluded from regular CI triggers via paths-ignore to save compute.
**Action:** Implement conditional caching in workflows and use paths-ignore for infrastructure/docs. Pin all actions to verified SHAs for supply chain security.
