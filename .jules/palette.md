## 2026-06-04 - Bilingual Accessibility in Documentation
**Learning:** For projects targeting specific linguistic communities (like BanglaChat), UX excellence starts with the documentation. Using semantic HTML `<span lang="...">` tags in Markdown ensures that screen readers switch to the correct synthesized voice, providing a truly inclusive experience for bilingual users.
**Action:** Always wrap non-English text in semantic tags with the appropriate `lang` attribute and provide ARIA labels for decorative symbols or emojis used in documentation headers.

## 2026-06-04 - CI Resilience for Documentation-First Changes
**Learning:** In uninitialized repositories, documentation-only changes can trigger and fail CI builds that expect a `package.json`.
**Action:** Implement `paths-ignore` for documentation and job-level guards (`if: hashFiles('package.json') != ''`) to ensure that UX-focused documentation improvements don't create "noisy" CI failures.
