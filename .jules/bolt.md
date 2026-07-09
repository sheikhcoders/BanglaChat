# Bolt's Journal - Critical Learnings

## 2026-07-09 - CI Efficiency in Uninitialized Repositories
**Learning:** In an uninitialized repository state (lacking `package.json`), standard CI workflows for Node.js and Next.js fail immediately. These redundant runs consume runner minutes and clutter the Actions history without providing value.
**Action:** Implement job-level guards (`if: hashFiles('package.json') != ''`) and `paths-ignore` for non-code files (like `README.md` and `.jules/**`) to ensure CI only runs when there is actionable code to build or test.
