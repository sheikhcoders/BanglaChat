# Palette's UX Journal

## 2026-04-22 - Bilingual Accessibility for README
**Learning:** For projects targeting a specific language community (like Bengali), providing a bilingual README using semantic HTML (`lang` attributes and ARIA regions) significantly improves accessibility and inclusion for both local and international contributors. A single `<h1>` with both names is better for SEO and screen readers than multiple top-level headers.
**Action:** Always use `<div lang="..." role="region" aria-label="...">` for localized content blocks and a combined `<h1>` for the project title.
