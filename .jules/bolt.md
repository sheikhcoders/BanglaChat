# Bolt's Journal

## 2026-09-16 - CI Workflow Optimization for Uninitialized Repositories & Non-Code Commits
**Learning:** In repositories without `package.json` or `package-lock.json`, setup-node with `cache: 'npm'` fails due to missing lockfiles, and matrix CI runs waste runner resources on non-code changes (such as markdown docs).
**Action:** Use conditional `hashFiles('package.json') != ''` step guards, explicit `actions/cache@v4` with `package-lock.json` guards, `paths-ignore` for `**.md` and `.jules/**`, and `cancel-in-progress: true` concurrency controls.
