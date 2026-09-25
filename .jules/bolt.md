## 2026-09-25 - CI Workflow Efficiency and Lockfile-less NPM Caching

**Learning:** `actions/setup-node@v4` with `cache: 'npm'` fails when `package-lock.json` is missing in uninitialized repositories. Using `actions/cache@v4` conditioned on `package.json` existence along with `paths-ignore` for markdown/metadata files (`**.md`, `.jules/**`) prevents unnecessary CI runner execution and pipeline failures.
**Action:** Always wrap dependency caching in step guards or conditional expressions, set `paths-ignore` for non-code files, enforce job execution timeouts (`timeout-minutes: 15`), and enable `cancel-in-progress: true` concurrency controls on GitHub Actions workflows.
