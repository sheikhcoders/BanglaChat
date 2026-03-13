# Bolt's Journal - Performance Learnings

## 2025-03-13 - Initializing CI Efficiency Patterns
**Learning:** In uninitialized repositories, standard CI workflows for Node.js and Next.js fail due to missing manifest files (package.json, package-lock.json). Implementing "Bootstrap Guards" and path-based execution filtering prevents unnecessary CI runs and failures, saving Action minutes and developer time.
**Action:** Apply `paths-ignore`, `concurrency` with `cancel-in-progress: true`, and `hashFiles` guards to all workflow files.
