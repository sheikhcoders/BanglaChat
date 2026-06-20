## 2026-06-20 - CI Resilience in Sparse Repositories
**Learning:** In uninitialized repositories (lacking package.json), standard CI workflows for Node.js/Next.js fail immediately and waste compute resources.
**Action:** Implement job-level hashFiles('package.json') guards and paths-ignore for documentation to ensure CI only runs when actionable code changes are present.
