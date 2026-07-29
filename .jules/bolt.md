# Bolt's Performance Journal

## 2026-07-28 - GitHub Actions Optimization in Uninitialized Repository
**Learning:** In an uninitialized repository with no `package.json`, standard Node.js CI/CD workflows will predictably fail during dependency installation. By introducing a post-checkout step-level existence check for `package.json`, we can dynamically skip installation, build, and deployment steps. Adding `paths-ignore` for documentation and journal files prevents redundant CI/CD triggering on non-code changes. Additionally, setting `cancel-in-progress: true` on Node.js CI workflow saves resources and time, while retaining `cancel-in-progress: false` on Pages deployments ensures deployment sequence integrity.
**Action:** Always implement post-checkout manifest existence checks, path filtering, and tailored concurrency strategies for repository workflows to achieve robust, resource-efficient GHA executions.
