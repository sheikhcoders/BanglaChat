## 2026-06-21 - CI Resilience in Sparse Repositories
**Learning:** Uninitialized projects (missing package.json) require job-level guards and paths-ignore rules to prevent compute waste and guaranteed CI failures.
**Action:** Always implement `if: hashFiles('package.json') != ''` guards and `paths-ignore` for documentation in sparse repository states.
