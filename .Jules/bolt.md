# Bolt's Performance Journal

## 2026-04-15 - CI efficiency with paths-ignore and concurrency
**Learning:** In repositories with frequent documentation or journal updates, implementing paths-ignore for README.md and .Jules/**, along with concurrency: cancel-in-progress: true, significantly reduces CI compute usage and provides faster feedback by skipping unnecessary runs and cancelling obsolete ones.
**Action:** Always include paths-ignore for non-code files and enable concurrency cancellation in CI workflows to optimize resource utilization.
