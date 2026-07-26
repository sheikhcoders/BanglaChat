# Bolt's Optimization & Performance Journal

## 2026-07-13 - [Next.js Production Deployment Concurrency Pattern]
**Learning:** In Next.js production deployment workflows using GitHub Pages or other hosting solutions, setting `cancel-in-progress: false` is critical. While cancelling in-progress runs generally saves runner resources, cancelling a live production deployment mid-transit can result in an inconsistent or broken production environment.
**Action:** Always override the standard resource-saving policy of `cancel-in-progress: true` specifically for deployment-critical jobs to ensure full deployment execution to completion.

## 2026-07-25 - [Graceful Degradation for Bootstrap-Aware CI]
**Learning:** When a repository is in an uninitialized state (such as missing `package.json`), trying to parse dependencies or run builds on standard node/next workflows will fail with "Dependencies lock file is not found" errors. Job-level guards like `hashFiles('package.json')` can fail if evaluated before checkout, or can prevent necessary setups. A step-level post-checkout existence check acts as an elegant fallback guard.
**Action:** Implement a clean `Check package.json existence` step immediately after checkout, and conditionally guard all downstream steps with an `if` expression checking that output or status to bypass dependencies, testing, and deployments cleanly without throwing CI errors.
