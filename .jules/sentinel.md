# Sentinel Journal

## 2025-05-14 - Hardening GitHub Actions Workflows
**Vulnerability:** Overly permissive default permissions and lack of timeouts in workflows.
**Learning:** GitHub Actions should have explicit, minimal permissions at the job level and timeouts to prevent resource exhaustion.
**Prevention:** Define explicit permissions and `timeout-minutes` for every job.

## 2025-05-14 - CI/CD Stability with Bootstrap Guards
**Vulnerability:** CI/CD pipeline failures in uninitialized repository states (e.g., missing package.json/lockfiles) leading to blocked PRs.
**Learning:** Workflows must account for early project states by using conditional checks for dependency manifests and providing fallback artifacts.
**Prevention:** Use `hashFiles()` to gate dependency steps and implement 'Bootstrap Guards' (e.g., creating empty output directories) to ensure CI passes even when the project is not fully set up.
