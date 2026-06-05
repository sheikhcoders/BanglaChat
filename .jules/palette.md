## 2026-06-04 - Bilingual Accessibility and CI Robustness

**Learning:** When building for a multilingual audience, the repository's documentation (README, PR templates) acts as a primary UI. Using semantic `lang` attributes (e.g., `<span lang="bn">`) ensures screen readers use the correct voice. Additionally, in uninitialized repositories, CI workflows must be hardened with conditional step guards (`if: hashFiles('package.json') != ''`) and permissive package manager commands (e.g., `pnpm install` instead of `npm ci`) to prevent early-stage failures. This project strictly mandates the use of `pnpm`.

**Action:** Always include semantic `lang` markers in bilingual documentation and implement robust CI guards for uninitialized project states using `pnpm`.
