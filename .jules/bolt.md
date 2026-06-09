## 2026-06-09 - CI Optimization for Uninitialized Repositories
**Learning:** Default CI workflows (like Node.js CI and Next.js Pages deployment) fail and waste compute resources in sparse repositories that lack a `package.json` or lockfiles.
**Action:** Always implement step-level guards (`if: hashFiles('package.json') != ''`) and `paths-ignore` for documentation/journals to ensure CI resilience and efficiency during the early stages of project setup.
