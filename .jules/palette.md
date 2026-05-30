## 2026-05-29 - Bilingual Accessibility in Repository Interface
**Learning:** For localized projects like BanglaChat, the repository itself (README, PR templates) serves as a primary user interface. Using semantic `lang` attributes and ARIA roles for emojis ensures that developers using screen readers in different languages have a consistent and accessible experience.
**Action:** Use `<div lang="bn">` for Bengali content and `<span role="img" aria-label="...">` for emojis in documentation. Avoid incorrect cultural terms like 'Puli' for 'Pull Request'.
