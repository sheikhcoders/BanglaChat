# Bolt's Performance Journal

## 2026-03-17 - Bootstrap Guard for CI Efficiency
**Learning:** CI workflows (like `node.js.yml` and `nextjs.yml`) trigger on every push but fail early and waste resources in uninitialized repositories lacking manifest files. Matrix jobs are particularly wasteful as they fail across multiple nodes for the same root cause (missing `package.json`).
**Action:** Implement a "Pre-check Job" pattern. A lightweight first job verifies the presence of mandatory files (e.g., `package.json`) and fails explicitly if missing. Subsequent matrix jobs depend on this pre-check, preventing multiple redundant failures and saving runner minutes while maintaining visibility. Combined with `concurrency` and `paths-ignore`, this maximizes CI efficiency.
