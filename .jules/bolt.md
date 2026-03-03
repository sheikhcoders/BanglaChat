## 2025-03-03 - [CI Workflow Efficiency Optimization]
**Learning:** When implementing multi-package manager support in GitHub Actions, failing to properly account for the default `npm` case in conditional caching logic can lead to performance regressions for the primary project configuration. Always ensure that `cache: npm` is still active when `pnpm` isn't detected, rather than disabling caching entirely.
**Action:** Use a more robust detection script that sets explicit fallback values for caching and runner commands to maintain consistency across all supported environments.

## 2025-03-03 - [GitHub Actions Cache Failure]
**Learning:** The `actions/setup-node` action will fail with a "Dependencies lock file is not found" error if the `cache` input is set (e.g., to `npm` or `pnpm`) but no corresponding lockfile (`package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`) exists in the repository.
**Action:** Always guard the `cache` input by checking for lockfile existence and setting it to an empty string if none are found.
