# Bolt's Performance Journal

## 2026-03-17 - Bootstrap Guard for CI Efficiency
**Learning:** CI workflows (like `node.js.yml` and `nextjs.yml`) trigger on every push but fail early and waste resources in uninitialized repositories lacking manifest files (e.g., `pnpm-lock.yaml`). Hardcoded `npm` usage or default caching without a lockfile leads to predictable failures.
**Action:** Implement the "Bootstrap Guard" pattern using `concurrency` and `paths-ignore` for CI efficiency. However, avoid making primary test steps (like `npm test`) conditional on lockfile presence, as this can lead to "silent successes" where CI passes without actually running tests. Instead, only use conditional logic for non-critical steps like caching.
