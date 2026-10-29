## 2026-10-29 - CI Workflow Performance in Minimal Repositories
**Learning:** CI workflows in uninitialized or minimal repositories execute unnecessary jobs on non-code changes (e.g. Markdown docs), lack concurrency cancellation for redundant PR commits, and fail without `package.json` check guards.
**Action:** Add `paths-ignore` for documentation/metadata changes, configure job-level `timeout-minutes`, implement concurrency groups with `cancel-in-progress: true`, and add conditional `hashFiles` / `package.json` check guards before npm operations.
