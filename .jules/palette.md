# Palette's Journal - UX & Accessibility Learnings

## 2026-05-24 - [Bilingual Accessible README Pattern]
**Learning:** In uninitialized repositories where README.md serves as the primary user interface, providing a bilingual foundation using semantic HTML and 'lang' attributes (e.g., `<p lang="bn">`) is a critical UX and accessibility enhancement for correct screen reader pronunciation.
**Action:** Always implement bilingual support with semantic HTML in READMEs for projects targeting multilingual audiences (like BanglaChat).

## 2026-05-24 - [CI Hardening for Uninitialized State]
**Learning:** CI failures in uninitialized repositories during documentation updates can be prevented by adding `paths-ignore` for `README.md`, `.jules/**`, and `SECURITY.md` in workflow triggers, along with job-level `if: hashFiles('package.json') != ''` guards.
**Action:** Implement these guards and path ignores to ensure CI stability during the early bootstrap phase of a project.
