## 2026-07-11 - CI Optimization for Uninitialized Repositories
**Learning:** In uninitialized repositories (no package.json), standard CI workflows for Node.js and Next.js will fail during dependency installation. Running these workflows on documentation-only changes wastes runner minutes.
**Action:** Implement `paths-ignore` for documentation and `if: hashFiles('package.json') != ''` guards to skip jobs gracefully when no manifest is found.
