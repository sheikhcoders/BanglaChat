## 2026-02-16 - CI Efficiency in Early-Stage Repositories
**Learning:** Significant performance gains and resource savings can be achieved even before application code exists by optimizing CI workflows. Adding concurrency control and path filtering prevents wasted Actions minutes on redundant builds and non-code updates.
**Action:** Always implement `concurrency` with `cancel-in-progress: true` and `paths-ignore` for metadata/journaling directories in CI workflows to ensure efficient resource usage from day one.

## 2026-02-16 - Robust CI for Uninitialized Repositories
**Learning:** CI workflows using `actions/setup-node` with `cache` enabled will fail in empty repositories if no lock file exists. This causes unnecessary job failures and wasted resources.
**Action:** Use conditional caching syntax `cache: ${{ hashFiles('package-lock.json', 'yarn.lock') != '' && 'npm' || '' }}` and guard steps with `if: hashFiles('package.json') != ''` to ensure CI passes gracefully in empty states.
