# Bolt's Performance Journal

## 2026-04-16 - CI Compute Optimization via paths-ignore and concurrency
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` for non-code files (README.md, .Jules/**) and `concurrency` with `cancel-in-progress: true` provides immediate performance wins by eliminating unnecessary CI runs and canceling redundant ones, saving significant compute resources.
**Action:** Always include `paths-ignore` for documentation and journal directories in new workflows, and ensure `concurrency` is configured to prevent pipeline backlog.

## 2026-04-16 - Robust CI for Uninitialized Repositories
**Learning:** Standard CI templates (like the Node.js starter) often assume the presence of `package.json` and lockfiles. In uninitialized or documentation-heavy repositories, these assumptions cause fatal CI errors when actions like `setup-node` or `npm ci` are called.
**Action:** Always guard package manager detection, dependency installation, and test steps with existence checks (e.g., `if: hashFiles('package.json') != ''`). For `actions/setup-node`, use conditional cache keys to prevent errors when no lockfile exists.
