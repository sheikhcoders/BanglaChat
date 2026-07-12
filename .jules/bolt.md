## 2026-07-11 - CI Optimization in Uninitialized Repository
**Learning:** In an uninitialized repository (missing `package.json`), standard CI workflows for Node.js or Next.js will fail and waste runner minutes. Implementing `paths-ignore` for documentation and job-level manifest guards (`if: hashFiles('package.json') != ''`) is the primary performance optimization to prevent these unnecessary runs.
**Action:** Always implement manifest existence guards and path filters when working on early-stage or documentation-only PRs to maximize CI efficiency.
