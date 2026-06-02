# Palette's Journal - UX & Accessibility

## 2026-06-02 - Bilingual Accessibility in Documentation
**Learning:** The 'Repo as Interface' philosophy mandates that for localized projects like BanglaChat, primary documentation (README, PR templates) must include semantic `lang` attributes and ARIA roles for symbols/emojis to ensure accessibility for both Bengali and English users.
**Action:** Always use `<span lang="bn">` for Bengali text and `aria-label` for emojis in Markdown to ensure screen readers provide the correct experience.
