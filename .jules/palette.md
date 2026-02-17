## 2026-02-17 - Accessible Bilingual Support

**Learning:** For a language-specific app like BanglaChat, providing bilingual (English/Bengali) support in the README is crucial for inclusivity. Additionally, using `aria-hidden="true"` on decorative emojis prevents screen readers from announcing them, which can be distracting for users.

**Action:** Always provide bilingual text for key sections and wrap decorative emojis in `<span aria-hidden="true">` in the README and other user-facing documentation.

## 2026-02-17 - CI Robustness in Empty Repositories

**Learning:** CI workflows that rely on package manager caching (like `actions/setup-node` with `cache: pnpm`) will fail if the lockfile is missing. This is common in the early stages of a repository before application code is committed.

**Action:** Implement robust package manager detection and use conditional caching logic (e.g., `${{ hashFiles('pnpm-lock.yaml') != '' && 'pnpm' || '' }}`) to allow CI to pass gracefully even when the repository is nearly empty.
