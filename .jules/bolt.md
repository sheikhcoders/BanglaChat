## 2026-05-28 - CI Compute Optimization via Path Filtering and Guards
**Learning:** In repositories that are uninitialized or frequently receive documentation updates, CI workflows without `paths-ignore` and job-level guards consume unnecessary compute resources and often result in "noisy" failures. Implementing `pnpm` with proper lockfile detection and caching further reduces build latency.
**Action:** Always implement `paths-ignore` for documentation and journals, and add `if: hashFiles('package.json') != ''` guards to build jobs in early-stage projects. Use `pnpm` exclusively as per project mandate for superior performance.

## 2026-05-28 - Balancing Optimization with CI Robustness
**Learning:** Aggressively switching to a specific tool (like `pnpm`) in shared CI workflows can be breaking if the repository structure isn't fully migrated. Using dynamic detection logic (e.g., checking for lockfiles) provides the same performance benefits for optimized branches while maintaining backward compatibility.
**Action:** Implement robust package manager detection in CI workflows to ensure they remain functional across different project states and branches.
