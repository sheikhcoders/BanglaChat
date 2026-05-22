## 2026-05-22 - CI Efficiency in Uninitialized States
**Learning:** In repositories that often reset to an uninitialized state (no `package.json`), CI workflows must be guarded with `if: hashFiles('package.json') != ''` at the job level to prevent failing runs. Additionally, `paths-ignore` for documentation and journals (`README.md`, `.jules/**`, `SECURITY.md`) prevents wasted compute for non-functional changes.
**Action:** Always include job-level guards and `paths-ignore` in GitHub Actions for this project to maintain CI resilience and efficiency.
