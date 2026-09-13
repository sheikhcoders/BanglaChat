## 2026-09-13 - CI Workflow Optimization for Uninitialized Repositories

**Learning:** CI workflows often trigger on non-code changes (such as `.md` updates) and fail on missing files (`package.json`) in early repository initialization states, wasting CI compute minutes. Adding `paths-ignore` for documentation files, `concurrency` controls with `cancel-in-progress: true`, `timeout-minutes: 15`, and step guards for `package.json` prevents unnecessary CI runs and failures.
**Action:** Always include path filters, concurrency cancellation rules, job timeouts, and file check guards in GitHub Actions workflows.
