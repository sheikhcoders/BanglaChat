## 2026-05-11 - CI Compute Optimization for Uninitialized Repositories
**Learning:** In uninitialized repositories (no `package.json`), standard CI workflows fail early or waste compute resources. Implementing job-level `if` guards (`hashFiles('package.json') != ''`) and `paths-ignore` for documentation ensures CI efficiency and stability during the bootstrap phase.
**Action:** Always apply `if` guards and `paths-ignore` when setting up CI for projects that may remain uninitialized or documentation-heavy for extended periods.
