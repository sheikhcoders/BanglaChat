# Palette's UX Journal 🎨

This journal documents critical UX/accessibility learnings for the BanglaChat project.

## 2026-04-24 - Repository Initialization
**Learning:** In an uninitialized repository (lacking `package.json`), the `README.md` and other documentation files serve as the primary 'interface' for users and developers. Accessibility and clarity in these documents are the first steps toward a great UX.
**Action:** Focus on improving documentation accessibility and providing clear project vision until the codebase matures.

## 2026-04-24 - Avoiding Landmark Noise in Documentation
**Learning:** Landmark regions (e.g., `role="region"`) should be used sparingly in documentation. Excessive use creates "landmark noise" for screen reader users, making navigation tedious. Semantic HTML with `lang` attributes on content blocks is sufficient for multi-language accessibility.
**Action:** Use `lang` attributes on individual elements like `<span>` or `<p>` to support screen readers without cluttering the accessibility tree with redundant regions.
