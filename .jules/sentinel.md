## 2026-03-10 - CI Failure in Uninitialized Repositories
**Vulnerability:** CI Availability/Robustness issue.
**Learning:** Standard Node.js CI workflows (like the GitHub Actions starter) fail immediately if `package-lock.json` is missing when `cache: 'npm'` is used, or if `npm ci` is called without a lockfile. This blocks security hardening PRs in new or minimal repositories.
**Prevention:** Implement "Bootstrap Guard" patterns using `if: hashFiles('package-lock.json') != ''` for cache configuration and installation steps to ensure CI remains resilient during the initial project setup phase.
