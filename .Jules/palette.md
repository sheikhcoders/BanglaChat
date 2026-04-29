# Palette's UX Journal

## 2026-04-29 - Bilingual Accessible Foundations
**Learning:** For projects targeting a specific language community like BanglaChat, a bilingual README using semantic HTML (`lang` attributes) and a single top-level `<h1>` provides the best balance of visual clarity and screen reader accessibility. Avoiding excessive ARIA landmarks in documentation prevents "landmark noise" for users.
**Action:** Use `<h1>Project (<span lang="bn">প্রকল্প</span>)</h1>` and wrap localized content in elements with `lang="bn"`.
