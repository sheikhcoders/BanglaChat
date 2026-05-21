# Palette's Journal - UX & Accessibility

## 2026-05-20 - Bilingual Accessible README Pattern
**Learning:** In uninitialized repositories where documentation is the primary interface, providing a bilingual foundation (English/Bengali) using semantic HTML with `lang="bn"` attributes ensures immediate accessibility and inclusivity for the target audience.
**Action:** Use `<p>`, `<span>`, and other semantic tags with the `lang` attribute to ensure correct screen reader pronunciation for Bengali text alongside English.

## 2026-05-20 - CI Hardening for Uninitialized State
**Learning:** In uninitialized repositories, standard CI workflows for Node.js/Next.js will fail due to missing lockfiles or `package.json`. Implementing job-level and step-level guards, along with `paths-ignore` for documentation, prevents unnecessary build failures and optimizes compute resources while blocking UX improvements.
**Action:** Apply `if: hashFiles('package.json') != ''` to jobs and conditional caching/installation steps in repositories that are not yet initialized.
