# Bolt Performance Journal

## 2026-02-28 - CI Resource Efficiency with Concurrency
**Learning:** In repositories with high commit frequency or multiple active PRs, GitHub Actions can waste significant CI minutes by running redundant workflows on superseded commits. Standard templates do not include branch-aware concurrency by default.
**Action:** Implement a concurrency group using `${{ github.workflow }}-${{ github.ref }}` with `cancel-in-progress: true` (guarded for the main branch) to immediately stop redundant runs, ensuring CI resources are focused on the latest code state.
