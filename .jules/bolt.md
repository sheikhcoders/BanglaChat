## 2026-04-05 - Optimize CI compute with paths-ignore
**Learning:** Implementing `paths-ignore` for documentation and journal files (`README.md`, `.jules/**`) in GitHub Actions workflows is a critical performance pattern in this repository, providing 100% compute savings for those specific commits and reducing developer feedback loops.
**Action:** Always include documentation and meta-files in `paths-ignore` for CI workflows that only need to run on code changes.

## 2026-04-05 - CI resilience in uninitialized repositories
**Learning:** In repositories that are early-stage or "uninitialized" (missing `package.json` or lockfiles), standard GitHub Actions templates for Node.js and Next.js will fail. Hardening workflows with conditional steps (`if: hashFiles('package.json') != ''`) and fallback artifact directories ensures the CI remains green during the bootstrap phase.
**Action:** Use `hashFiles` to guard dependency-related steps and implement a "Bootstrap Guard" to provide empty fallback directories for artifact upload steps.
