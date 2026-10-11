# Bolt's Journal - Critical Performance Learnings

## 2026-10-11 - Optimizing GitHub Workflows for Uninitialized Repo States and Fast CI Cycles
**Learning:** Standard GitHub Action workflow templates like `setup-node` with `cache: 'npm'` fail when no `package-lock.json` or `npm-shrinkwrap.json` exists in an early/uninitialized repository. Furthermore, PRs touching non-code files (e.g., Markdown documentation or `.jules` logs) needlessly trigger expensive CI runner setups and builds if `paths-ignore` isn't configured.
**Action:** Always add `paths-ignore: ['**.md', '.jules/**']`, concurrency cancellation `cancel-in-progress: true`, job timeouts, and `package.json` check guards in workflow files for maximum execution efficiency and build safety.
