## 2026-04-28 - CI Optimization for Uninitialized Repositories
**Learning:** In uninitialized repositories (lacking package.json), CI workflows often fail if they expect manifest files for caching or installation. Optimization focuses on avoiding these failures and skipping redundant runs.
**Action:** Use paths-ignore for documentation/journals and conditional caching/execution in CI workflows to save compute resources.
