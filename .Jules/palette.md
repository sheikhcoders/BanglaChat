# Palette's UX Journal

## 2026-04-21 - Bilingual Accessible Documentation Pattern
**Learning:** For projects serving the Bengali-speaking community, using a single top-level <h1> with both English and localized names, combined with ARIA-labeled regional divs and explicit HTML child tags, ensures maximum screen reader compatibility and internationalization support.
**Action:** Always wrap bilingual sections in <div lang="..." role="region" aria-label="..."> and use HTML tags like <h2> and <p> for inner content to avoid Markdown rendering issues in HTML blocks.
