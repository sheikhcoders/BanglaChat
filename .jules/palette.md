# Palette's UX Journal

## 2026-05-08 - Bilingual Accessible README Foundation
**Learning:** In uninitialized repositories where documentation is the primary interface, accessibility can be enhanced using semantic HTML with `lang="bn"` attributes. However, using a full HTML boilerplate (`<!DOCTYPE html>`, `<html>`, `<body>`) in `README.md` is a regression because repository hosting platforms expect Markdown.
**Action:** Use standard Markdown for `README.md` and embed semantic HTML tags (`<p>`, `<span>`) only where needed for accessibility (e.g., `lang` attributes), avoiding structural HTML boilerplate.
