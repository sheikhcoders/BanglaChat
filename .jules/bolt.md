## 2026-07-09 - [CI Efficiency in Uninitialized Repository]
**Learning:** In a repository without a `package.json`, standard Node.js CI workflows fail immediately and waste runner minutes across multiple matrix jobs. Implementing job-level manifest guards and `paths-ignore` for documentation prevents this waste.
**Action:** Use `if: hashFiles('package.json') != ''` at the job level and add `paths-ignore` for non-code files to optimize CI resource usage.
