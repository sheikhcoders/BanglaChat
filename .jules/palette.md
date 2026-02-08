## 2025-05-22 - Accessible Emojis in Repository Documentation

**Learning:** Decorative emojis in Markdown/HTML (like those used in README.md or PR templates) should be hidden from screen readers using `aria-hidden="true"` to reduce auditory clutter for assistive technology users.
**Action:** Always wrap decorative emojis in a `<span aria-hidden="true">` tag when they don't provide critical information.
