## 2026-04-11 - CI Stability and Performance in Uninitialized Repositories
**Learning:** Standard GitHub Actions workflows fail in uninitialized repositories because they expect `package.json` and lockfiles to exist. Adding `paths-ignore` for documentation and `concurrency` controls prevents wasted compute on non-code changes.
**Action:** Always harden CI workflows with `hashFiles` checks for `package.json` and lockfiles to ensure stability during the bootstrap phase, and use `paths-ignore` for `.Jules/**` and `README.md`.
