# Palette's Journal - UX & Accessibility Learnings

## 2026-05-16 - Bilingual Accessible README Pattern
**Learning:** In uninitialized repositories where documentation is the primary interface, a bilingual (English/Bengali) foundation using semantic HTML and localized 'lang' attributes ensures immediate accessibility and inclusive entry points.
**Action:** Always use `lang="bn"` on Bengali text blocks to ensure screen readers use the correct pronunciation.

## 2026-05-17 - CI Hardening for Uninitialized State
**Learning:** CI workflows must be resilient to uninitialized repository states (missing package.json/lockfiles). Step-level guards (`if: hashFiles('package.json') != ''`) are more reliable than job-level guards for initial setups.
**Action:** Always include step-level guards and `paths-ignore` for documentation-only changes to prevent redundant or failing CI runs.
