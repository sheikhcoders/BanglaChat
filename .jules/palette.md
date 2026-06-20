# 🎨 Palette's Journal

## 2026-06-20 - Bilingual Accessibility in Documentation
**Learning:** For bilingual projects like BanglaChat, providing accessible documentation in both English and Bengali is crucial. Using `<span lang="bn">` helps screen readers correctly identify and pronounce Bengali text in rendered Markdown, but raw text in templates (like PR templates) should avoid HTML tags to maintain readability in code editors.
**Action:** Use semantic HTML for rendered docs (README.md) and plain text for developer templates (PULL_REQUEST_TEMPLATE.md). Avoid the term 'পুলি' (Puli) for Pull Request; use 'পুল রিকোয়েস্ট' (Pul Request) instead.
