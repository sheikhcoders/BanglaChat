## 2026-05-24 - CI Compute Optimization for Uninitialized States
**Learning:** CI workflows often fail or waste compute cycles in uninitialized repositories (lacking `package.json`). Forcing a specific package manager (e.g., `pnpm`) without verifying project compatibility causes regressions.
**Action:** Implement job-level `if: hashFiles('package.json') != ''` guards and `paths-ignore` for documentation/journals. Use adaptive package manager detection that respects existing lockfiles (`pnpm-lock.yaml`, `yarn.lock`, or `package-lock.json`) to ensure build stability and resource efficiency.
