## 2026-06-23 - CI Resilience in Sparse Repositories
**Learning:** In uninitialized repositories (missing `package.json`), standard CI workflows (Node.js, Next.js) will fail by default, causing compute waste and "false positive" PR blocks. Job-level guards and documentation `paths-ignore` rules are essential to maintain CI efficiency during the project's early bootstrap phase.
**Action:** Implement `if: hashFiles('package.json') != ''` guards on all build/test jobs and exclude documentation changes (`README.md`, `.Jules/**`) from CI triggers using `paths-ignore`.
