## 2026-06-04 - CI/CD Resource Optimization
**Learning:** In repositories with heavy documentation or those in an uninitialized state, default CI/CD workflows trigger unnecessarily for non-code changes (e.g., README updates, journals), wasting compute resources and increasing developer wait times. Additionally, cache keys should be inclusive of multiple potential lockfiles (npm, yarn, pnpm) to ensure efficiency during package manager migrations.
**Action:** Always implement `paths-ignore` for documentation and journal directories (`README.md`, `.jules/**`) in GitHub Actions. Ensure `hashFiles` in caching steps includes `pnpm-lock.yaml` to future-proof for `pnpm` usage.

## 2026-06-05 - Handling Uninitialized States in CI
**Learning:** `actions/setup-node` and other CI tools can fail if expected project files (like lockfiles) are missing. In uninitialized or sparse repositories, workflow files themselves being modified bypasses `paths-ignore`, triggering runs that fail on mandatory steps.
**Action:** Implement conditional caching logic (`cache: ${{ hashFiles(...) != '' && 'npm' || '' }}`) and step-level guards (`if: hashFiles('package.json') != ''`) to ensure CI robustness in uninitialized repository states.
