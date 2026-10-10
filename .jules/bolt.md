# Bolt's Journal ⚡

## 2026-10-09 - CI Workflow Path Filtering & Uninitialized Repo Safeguards

**Learning:** Running full CI builds on documentation or agent journal updates wastes GitHub Actions runner minutes and delays feedback loops. Furthermore, running `npm ci` on uninitialized repos without a `package.json` causes instant pipeline failures.

**Action:** Always include `paths-ignore` for `**.md` and `.jules/**` in GitHub Actions workflows, enable `concurrency` with `cancel-in-progress: true` for PR builds, set reasonable `timeout-minutes`, and use an explicit `package.json` existence check before invoking npm commands.
