## 2026-04-28 - Bilingual Accessible Header Pattern
**Learning:** For projects targeting a specific language community (like Bengali), providing a bilingual README using semantic HTML (`lang` attributes and a single `<h1>`) significantly improves accessibility and inclusion for both local and international contributors.
**Action:** Use `<h1>Project Name (<span lang="bn">প্রকল্পের নাম</span>)</h1>` for bilingual headers to ensure screen readers correctly identify the language switch while maintaining a clean document structure.

## 2026-04-28 - Bootstrap-Aware CI for Better DX
**Learning:** In uninitialized repositories (no `package.json`), standard CI workflows often fail fatally. Guarding workflow steps with manifest existence checks allows CI to pass gracefully, improving the developer experience for early-stage projects.
**Action:** Implement conditional execution in GitHub Actions based on `package.json` existence to support bootstrapping without false-negative CI failures.
