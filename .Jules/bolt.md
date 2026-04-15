# Bolt's Performance Journal

## 2026-04-15 - CI efficiency with paths-ignore and concurrency
**Learning:** In repositories with frequent documentation or journal updates, implementing paths-ignore for README.md and .Jules/**, along with concurrency: cancel-in-progress: true, significantly reduces CI compute usage and provides faster feedback by skipping unnecessary runs and cancelling obsolete ones.
**Action:** Always include paths-ignore for non-code files and enable concurrency cancellation in CI workflows to optimize resource utilization.

## 2026-04-15 - Robust CI for uninitialized repositories
**Learning:** In early-stage repositories without a package.json or lockfile, standard GitHub Actions like setup-node with caching enabled will fail. Implementing a "Detect manager" step that conditionally sets the cache input and guards subsequent build/test steps prevents these fatal errors.
**Action:** Use conditional logic in CI workflows to detect the presence of package manifests and lockfiles before attempting to install dependencies or run scripts.
