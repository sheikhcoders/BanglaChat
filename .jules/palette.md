# Palette UX Journal 🎨

This journal tracks critical UX and accessibility learnings for the BanglaChat project.

## 2026-03-05 - Initializing UX Foundation
**Learning:** For an open-source project targeting a specific linguistic community (Bengali), the repository itself acts as the primary user interface for developers and contributors. Accessibility and localization should start at the documentation level.
**Action:** Implement bilingual README with accessibility-focused markers.

## 2026-03-05 - Infrastructure-Aware UX
**Learning:** UX improvements in an uninitialized repository (lacking `package.json` or lockfiles) must be accompanied by basic infrastructure fixes to prevent CI failures. A "micro-UX win" is only a win if it doesn't break the build.
**Action:** When initializing documentation-only improvements, ensure the repository's package manager (pnpm) and CI workflows are correctly configured to handle the new files.
