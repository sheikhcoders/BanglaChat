## 2026-06-03 - [CI Stabilization]
**Learning:** In uninitialized repositories (no `package.json`), `paths-ignore` for documentation is insufficient to prevent CI failures if the workflow files themselves are being modified. The `actions/setup-node` caching mechanism fails explicitly if a lockfile is missing. Job-level `if: hashFiles('package.json') != ''` guards are the only reliable way to handle this state gracefully.
**Action:** Always implement job-level guards for manifests/lockfiles when modifying CI workflows in uninitialized repositories.
