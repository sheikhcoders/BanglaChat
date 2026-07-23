# Bolt's Journal - Critical Learnings

## 2026-07-22 - Workflow Optimization for Uninitialized Repositories
**Learning:** In uninitialized repositories lacking a `package.json` file, executing standard installation or build tasks causes immediate CI workflow failures ("Dependencies lock file is not found" or "No package.json found"). Running actions before checkout also makes `hashFiles` checks fail since the files do not exist in the runner environment yet.
**Action:** Implement step-level checks immediately post-checkout to verify if `package.json` exists. Store and output this status to guard and cleanly bypass all downstream build, setup, lint, test, and deployment jobs, avoiding waste of GitHub Actions runner minutes.
