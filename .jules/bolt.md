# Bolt's Performance Journal ⚡

## 2026-05-21 - [CI Efficiency: Paths Ignore & Resource Conservation]
**Learning:** In uninitialized or documentation-heavy repositories, CI workflows often trigger unnecessarily for changes that don't affect the build (like README.md or journal updates). This wastes compute minutes and clogs the action queue.
**Action:** Always implement `on.push.paths-ignore` and `on.pull_request.paths-ignore` for non-code files. Also, implement job-level `if` guards to detect the presence of project files before spinning up runners.
