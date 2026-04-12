## 2026-04-11 - Repository as Interface Initialization
**Learning:** In uninitialized repositories lacking source code, the `README.md` functions as the primary user interface. Establishing a bilingual (English/Bengali) and accessible foundation with proper ARIA regions and explicit HTML tags (to avoid nested Markdown parsing failures) is a high-priority micro-UX win for localized projects.
**Action:** Use bilingual layouts with `<div lang="...">` and `role="region"` to ensure the repo is accessible and welcoming to the target community from day one.
