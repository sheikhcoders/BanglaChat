# Bolt's Journal - Critical Learnings Only

## 2026-06-21 - CI Efficiency in Sparse Repositories
**Learning:** In uninitialized repositories (missing package.json), standard Node.js CI workflows fail at the `npm ci` or caching steps. Implementing job-level `if: hashFiles('package.json') != ''` guards and conditional caching prevents compute waste and unnecessary "red" builds.
**Action:** Always implement resilient guards in CI workflows when working in uninitialized or sparse repository states.
