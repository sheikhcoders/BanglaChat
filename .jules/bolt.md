# Bolt's Journal - Critical Learnings Only

## 2026-06-17 - [CI Efficiency: Preventing Cache Failures in Sparse Repos]
**Learning:** `actions/setup-node@v4` with `cache: 'npm'` throws a terminal error if a lockfile is missing. In uninitialized repositories (no `package-lock.json`), this causes unavoidable CI failures even for documentation-only PRs that bypass `paths-ignore` (e.g., when workflow files are modified).
**Action:** Use conditional caching logic: `cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}` to ensure the workflow remains resilient across repository states.
