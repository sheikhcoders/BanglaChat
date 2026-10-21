# Bolt Journal - Performance Learnings

## 2026-10-21 - CI Optimization for Minimal / Uninitialized Repositories
**Learning:** Running full CI jobs on non-code changes (like markdown or `.jules/` docs) or failing pipelines on uninitialized repositories without `package.json` wastes substantial GitHub Actions compute resources and slows down developer feedback loop.
**Action:** Always configure `paths-ignore` filters for documentation, set `timeout-minutes`, introduce `cancel-in-progress` concurrency controls, and add file check guards for `package.json` before running `npm ci` or build tools.
