# Bolt's Journal - Critical Learnings

## 2026-10-03 - Uninitialized repository CI optimization
**Learning:** In uninitialized repositories without source code or `package.json`, CI workflow jobs (such as `nextjs.yml` and `node.js.yml`) can consume unnecessary runner minutes and fail on missing setup files/lockfiles. Adding paths-ignore filters (`**.md`, `.jules/**`), concurrency cancellation, 15-minute execution timeouts, and `package.json` existence check guards prevents wasteful CI runs while keeping workflow executions safe and fast.
**Action:** Always include path filters, concurrency controls, job timeouts, and file existence check step guards in GitHub Actions workflows when optimizing CI pipeline efficiency.
