# Bolt's Performance Journal - Critical Learnings Only

## 2026-09-18 - CI Workflow Optimization in Uninitialized Repositories
**Learning:** Standard GitHub Actions workflows (such as `actions/setup-node` with `cache: 'npm'`) fail when no `package-lock.json` or `package.json` exists in uninitialized repositories. Additionally, triggering CI runs on documentation-only commits (`**.md`, `.jules/**`) wastes valuable runner compute minutes.
**Action:** Use conditional dependency caching via `actions/cache@v4` with `if: hashFiles('package-lock.json') != ''`, add `if: hashFiles('package.json') != ''` step guards before `npm ci` / `npm test`, configure `paths-ignore` for non-code files, and set `concurrency` with `cancel-in-progress: true`.
