## 2026-06-27 - CI Efficiency in Uninitialized Repositories
**Learning:** In the early stages of a project without a `package.json`, standard GitHub Actions workflows fail and consume unnecessary compute. Using `paths-ignore` for documentation and guarding steps with `hashFiles` checks prevents these wasteful runs.
**Action:** Always implement `paths-ignore` for non-code files and use conditional execution for manifest-dependent steps to maintain CI efficiency.
