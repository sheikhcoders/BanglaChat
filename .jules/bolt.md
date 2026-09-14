## 2026-09-14 - CI Workflow Optimization for Uninitialized Repositories and Non-Code Changes

**Learning:** In uninitialized or non-Node repositories lacking `package.json` or `package-lock.json`, built-in setup caching like `setup-node`'s `cache: 'npm'` fails prematurely if no lockfile/package.json exists. Removing dependency caching entirely, however, regresses build performance for code changes. Using `actions/cache@v4` with `if: steps.check_pkg.outputs.has_pkg == 'true'` provides conditional npm dependency caching without crashing on uninitialized repos.

**Action:**
1. Add `paths-ignore` (`'**.md'`, `'.jules/**'`) to `on.push` and `on.pull_request` event triggers.
2. Add `concurrency` with `cancel-in-progress: true` to abort outdated CI runs when new commits are pushed.
3. Set `timeout-minutes: 15` on jobs to prevent runaway build processes.
4. Replace rigid `cache: 'npm'` in `actions/setup-node` with conditional `actions/cache@v4` combined with an inline `package.json` existence guard step to retain fast dependency caching while handling uninitialized project states.
