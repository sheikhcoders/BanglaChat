# Bolt's Journal - Performance Learnings

## 2026-10-27 - CI Workflow Optimization in Minimal Repositories
**Learning:** In minimal or uninitialized repositories lacking package.json/lockfiles, CI workflows consume unnecessary runner time and fail on setup-node cache lookups or package manager detection. Furthermore, markdown and agent journal updates trigger redundant matrix builds.
**Action:** Always add `paths-ignore` (`**.md`, `.jules/**`), `concurrency` cancellation controls, `timeout-minutes: 15`, and step guards (`if: hashFiles('package.json') != ''`) for Node/NPM steps to save compute resources and ensure clean CI execution.
