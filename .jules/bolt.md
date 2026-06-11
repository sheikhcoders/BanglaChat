# Bolt's Journal - Performance Optimizations

## 2026-06-10 - Initializing Bolt's Journal
**Learning:** The repository is in a sparse, uninitialized state. CI workflows trigger on every change, even to documentation, wasting compute resources.
**Action:** Implement `paths-ignore` and `concurrency` in CI workflows to optimize resource usage.

## 2026-06-10 - CI Optimization for Sparse Repositories
**Learning:** In uninitialized repositories, standard CI steps (like `npm ci`) fail. Adding step-level guards prevents unnecessary failures and saves compute time by skipping work when the environment isn't ready.
**Action:** Use `hashFiles('package.json') != ''` or similar guards in workflow steps.
