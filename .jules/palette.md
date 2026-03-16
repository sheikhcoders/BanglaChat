# Palette's Journal

## 2025-03-16 - Bilingual Accessible Documentation

**Learning:** For localized repositories like BanglaChat, accessibility must extend beyond the UI to the documentation. Using bilingual text (English/Bengali) ensures a wider range of contributors and users can understand the project. Additionally, emojis in documentation should be wrapped in ARIA tags to be accessible to screen reader users.
**Action:** Always use `<span role="img" aria-label="description">emoji</span>` for emojis in READMEs, PR templates, and other public-facing documentation in this repository.
