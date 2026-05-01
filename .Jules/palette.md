## 2026-04-28 - Bilingual Accessible Header Pattern
**Learning:** For projects targeting specific language communities, a bilingual header using semantic HTML (<span lang="...">) provides the best balance of visual clarity and screen reader accessibility; using a nested <span> in <h1> for the localized name is the preferred pattern.
**Action:** Use `<h1>Name (<span lang="bn">নাম</span>)</h1>` for the main title.

## 2026-04-30 - Bilingual Accessible Documentation Pattern
**Learning:** Documentation for the Bengali-speaking community uses a single top-level <h1> with both localized and English names. While 'lang' attributes on content blocks are critical for accessibility, ARIA landmark wrappers should be avoided for small sections to maintain a clean navigation structure.
**Action:** Use `lang="bn"` on individual `<p>` tags for localized content blocks.
