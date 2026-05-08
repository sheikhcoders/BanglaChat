## 2026-05-07 - CI Compute Optimization for Uninitialized Repositories
**Learning:** In uninitialized repositories where documentation and journals are the primary activity, standard CI templates waste significant compute by running on every push and failing due to missing manifests.
**Action:** Implement job-level guards (`hashFiles('package.json') != ''`), `paths-ignore` for non-code files, and `cancel-in-progress` concurrency to minimize resource waste and eliminate "false positive" failures.
