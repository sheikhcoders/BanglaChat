## 2025-05-14 - Repo as Interface: Bilingual Accessible Documentation

**Learning:** For projects targeting specific linguistic groups (like BanglaChat), accessibility extends beyond ARIA attributes to language availability. Using a "Repo as Interface" philosophy ensures that contributors and users are welcomed in their native language from the first interaction (README). Combining this with accessible emoji patterns (`aria-hidden="true"` for decorative, `role="img"` for informative) creates a cohesive, high-quality UX for the repository itself.

**Action:** Implement bilingual (English/Target Language) foundations for README.md and PULL_REQUEST_TEMPLATE.md in all localized projects. Always wrap decorative emojis in `<span aria-hidden="true">` to reduce screen reader noise.
