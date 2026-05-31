## 2026-05-31 - Bilingual Accessibility in Repository Documentation
**Learning:** The 'Repo as Interface' philosophy mandates that for localized projects like BanglaChat, primary documentation (README, PR templates) must include semantic `lang` attributes and ARIA roles for symbols/emojis to ensure accessibility for Bengali and English users. This assists screen readers in selecting the correct synthesized voice.
**Action:** Always wrap localized content in `<div lang="...">` or `<span lang="...">` when designing for bilingual audiences, even in non-code files.
