## 2026-07-04 - CI Efficiency in Uninitialized Repositories
**Learning:** In repositories with no application code, CI runs on every documentation change are wasteful.
**Action:** Implement 'paths-ignore' for documentation and journals, and use 'concurrency' to cancel redundant builds.
