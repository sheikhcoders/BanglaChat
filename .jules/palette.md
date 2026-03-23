# Palette's Journal 🎨

## 2025-03-24 - Bilingual Accessibility Standard for Emojis
**Learning:** In a repository like BanglaChat that caters to both English and Bengali speakers, visual cues like emojis must be accessible in both languages. Using a single-language ARIA label (e.g., `aria-label="chat bubble"`) excludes screen reader users who primarily use the other language. A bilingual label (e.g., `aria-label="chat bubble / চ্যাট বাবল"`) ensures that the semantic meaning of the emoji is conveyed regardless of the user's primary language setting.

**Action:** Always use bilingual labels in the format `English / Bengali` within the `aria-label` attribute when wrapping emojis in `<span role="img">`.
