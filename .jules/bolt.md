# Bolt's Journal - Critical Learnings

## 2026-10-14 - CI Workflow Optimization in Uninitialized Repositories
**Learning:** In early-stage or uninitialized repositories lacking application source files (e.g. `package.json`), GitHub Actions workflows trigger on non-code updates and fail during dependency setup steps across multiple Node.js matrix versions, consuming unnecessary CI runner compute minutes and delaying feedback loops.
**Action:** Always configure `paths-ignore` for non-code paths (`**.md`, `.jules/**`), set `concurrency` with `cancel-in-progress: true`, enforce reasonable `timeout-minutes` on jobs, and add inline `package.json` existence checks before running `npm` commands in Node workflows.
