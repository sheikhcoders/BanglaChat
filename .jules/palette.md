# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-03-15 - Bilingual Accessible Documentation

**Learning:** For a localized project like BanglaChat, providing documentation only in one language or using inaccessible emojis creates a barrier for both developers and screen reader users. Combining English and Bengali content while wrapping emojis in accessible spans ensures a truly inclusive 'Repo as Interface'.
**Action:** Always provide equivalent English/Bengali headings and descriptions. Wrap all emojis in `<span role="img" aria-label="...">` to ensure they are meaningful to screen reader users.
