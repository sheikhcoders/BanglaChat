## 2026-05-02 - Bilingual Accessible README Pattern
**Learning:** For projects targeting specific language communities, providing a bilingual README using semantic HTML (`lang` attributes) significantly improves accessibility. Using a single `<h1>` with both English and localized names wrapped in a `<span>` is the preferred pattern for screen reader support.
**Action:** Always use `<span lang="...">` for inline localized text and `<p lang="...">` for localized blocks to ensure correct screen reader pronunciation.
