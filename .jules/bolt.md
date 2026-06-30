## 2026-06-30 - CI Efficiency in Uninitialized Repositories
**Learning:** In the early stages of a project without a `package.json`, standard CI workflows often fail or run unnecessarily. Adding `paths-ignore` for documentation and `if: hashFiles('package.json') != ''` guards prevents these failures and saves compute resources.
**Action:** Always implement manifest guards and path exclusions when setting up or optimizing CI for early-stage projects.
