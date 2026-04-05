## 2026-04-05 - Optimize CI compute with paths-ignore
**Learning:** Implementing `paths-ignore` for documentation and journal files (`README.md`, `.jules/**`) in GitHub Actions workflows is a critical performance pattern in this repository, providing 100% compute savings for those specific commits and reducing developer feedback loops.
**Action:** Always include documentation and meta-files in `paths-ignore` for CI workflows that only need to run on code changes.
