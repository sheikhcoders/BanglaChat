## 2026-10-05 - CI Workflow Efficiency and Lockfile Caching Safeguards

**Learning:** `actions/setup-node@v4` with `cache: 'npm'` throws a fatal error if no dependency lockfile (`package-lock.json`, `npm-shrinkwrap.json`, or `yarn.lock`) exists in the workspace. Using a dynamic GitHub Actions expression (`cache: ${{ steps.check_package.outputs.has_package == 'true' && 'npm' || '' }}`) allows setup-node to safely skip lockfile lookup in uninitialized repos while enabling `npm` caching automatically when `package.json` is present. Additionally, `paths-ignore` (`**.md`, `.jules/**`) and `concurrency` cancellation (`cancel-in-progress: true`) prevent wasting compute resources on non-code commits and superseded builds.

**Action:** Always use conditional expression syntax for `setup-node` caching in repositories that may be uninitialized, alongside `paths-ignore`, `concurrency: cancel-in-progress`, and `timeout-minutes` controls in GitHub Actions CI workflows.
