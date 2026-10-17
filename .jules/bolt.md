# Bolt's Journal - Performance Learnings

## 2026-10-17 - CI Workflow Execution Optimization in Skeleton Repositories
**Learning:** In uninitialized or skeleton repositories lacking `package.json`, default CI workflows (`node.js.yml` and `nextjs.yml`) waste compute resources by triggering on documentation updates, running redundant parallel jobs for rapid pushes, and failing/hanging when expecting missing package manifests.
**Action:** Always filter out documentation (`**.md`, `.jules/**`) from CI push/pull_request triggers with `paths-ignore`, add `concurrency` with `cancel-in-progress: true`, enforce `timeout-minutes: 15` on jobs, and add inline `package.json` existence checks before running package manager setup or build commands.
