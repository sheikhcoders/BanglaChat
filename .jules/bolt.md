## 2026-07-05 - CI Efficiency for Uninitialized Repositories
**Learning:** In the early stages of a project or after repository resets, CI workflows often waste runner minutes by attempting to build/test non-existent code or running on documentation-only changes.
**Action:** Implement `paths-ignore` for non-code files (README.md, .jules/**) and use `if: hashFiles('package.json') != ''` job-level guards to skip execution until a manifest is present. Add concurrency with `cancel-in-progress: true` to avoid redundant runs on the same branch.
