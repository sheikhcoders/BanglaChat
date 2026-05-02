## 2026-05-02 - CI Compute Optimizations for Uninitialized Repositories
**Learning:** In repositories that are not yet fully initialized (missing package.json), GitHub Actions workflows like Node.js CI and Next.js deployment will fail or run unnecessarily. Guards like `if: hashFiles('package.json') != ''` and conditional caching are essential for CI efficiency and stability during the bootstrap phase.
**Action:** Always implement job-level guards and conditional caching/dependency installation in CI workflows to handle uninitialized states and minimize redundant compute usage.
