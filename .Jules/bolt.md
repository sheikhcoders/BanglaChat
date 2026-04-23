# Bolt's Performance Journal

## 2026-04-23 - Journal Initialization
**Learning:** Initialized Bolt's performance journal for the BanglaChat project.
**Action:** Use this journal to document critical performance learnings and optimizations.

## 2026-04-23 - CI Hardening for Uninitialized Repositories
**Learning:** GitHub Actions `actions/setup-node@v4` with `cache` enabled fails if no lockfile is found. In uninitialized repositories, steps like `npm ci` or `npm test` also cause fatal errors if `package.json` is missing.
**Action:** Always use conditional caching (e.g., checking `hashFiles`) and guard execution steps with `if: hashFiles('package.json') != ''` to ensure CI resilience in early project stages.
