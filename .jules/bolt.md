# Bolt's Journal - Critical Learnings

## 2026-10-26 - CI Workflow Optimization in Minimal Repositories
**Learning:** In repositories without full application code or dependencies, unoptimized CI workflows waste GitHub Actions minutes by running on documentation/journal updates (`*.md`), hanging on missing `package.json`, or executing redundant concurrent runs on rapid pushes.
**Action:** Filter doc-only pushes with `paths-ignore`, add concurrency controls with `cancel-in-progress: true`, set strict job `timeout-minutes: 15`, and add `package.json` execution guards.
