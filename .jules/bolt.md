## 2026-06-11 - [CI/CD Efficiency in Sparse Repositories]
**Learning:** In repositories that are frequently reset to a sparse state (missing `package.json`), standard CI/CD workflows for Node.js or Next.js will fail by default, wasting compute resources and developer time. Implementing job-level guards (`if: hashFiles('package.json') != ''`) and `paths-ignore` for documentation ensures that CI only runs when actionable code is present.
**Action:** Always implement `concurrency` with `cancel-in-progress: true`, `paths-ignore` for non-code files, and job-level `hashFiles` guards in CI workflows for this project.

## 2026-06-11 - [Optimization Metrics: CI Efficiency]
**Metric:** Estimated compute time saved: ~2-5 minutes per documentation-only PR or commit push.
**Impact:** Prevents 100% of CI failures in uninitialized repository states, saving developer review time and infrastructure costs.
