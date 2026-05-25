## 2026-05-25 - Bilingual Accessible README Pattern
**Learning:** In uninitialized repositories where README.md serves as the primary user interface, providing a bilingual foundation using semantic HTML and 'lang' attributes (e.g., `<p lang="bn">`) is a critical UX and accessibility enhancement for correct screen reader pronunciation.
**Action:** Establish a bilingual foundation in documentation for projects with multilingual target audiences to ensure immediate accessibility and inclusive design from the start.

## 2026-05-25 - CI Hardening for Uninitialized State
**Learning:** CI failures in uninitialized repositories during documentation updates can be prevented by adding `paths-ignore` for documentation/journals and job-level `if: hashFiles('package.json') != ''` guards. This improves the developer experience by reducing noise and resource consumption.
**Action:** Implement compute-efficient CI guards in all workflows to handle uninitialized repository states gracefully.
