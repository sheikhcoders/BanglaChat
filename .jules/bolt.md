## 2026-06-15 - [CI] Setup-node terminal error on missing lockfile
**Learning:** Using `actions/setup-node@v4` with `cache: 'npm'` causes a terminal error if `package-lock.json` is missing, even if `package.json` exists. This is particularly problematic in uninitialized or sparse repository states where the CI might still be triggered.
**Action:** Implement conditional caching using `cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}` to ensure CI resilience in early project stages.
