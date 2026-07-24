# Bolt's Journal - Critical Learnings Only

## 2026-07-23 - CI Optimization and Manifest Existence Guards in Uninitialized State
**Learning:** In uninitialized repositories (no `package.json` present), standard setup-node or package manager tasks will fail with errors like 'Dependencies lock file is not found'. Job-level checks using `hashFiles('package.json') != ''` executed prior to checkout fail because the workspace is empty when evaluated. Running a step-level manifest check right after `actions/checkout` and checking step outputs cleanly bypasses build steps and prevents runner failures.
**Action:** Always add post-checkout manifest existence checks, and ignore documentation/journals using `paths-ignore` to eliminate redundant CI runs.
