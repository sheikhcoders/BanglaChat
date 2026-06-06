## 2026-06-05 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable version tags for GitHub Actions and overly permissive default GITHUB_TOKEN.
**Learning:** Hardening GITHUB_TOKEN permissions at the top-level to `contents: read` requires explicit restoration of other permissions (like `pages: write` and `id-token: write`) for specific jobs like deployment. Also, pinning actions to SHAs provides immutable security but requires careful management of action-specific configurations (e.g., `static_site_generator: next` in `configure-pages`) which can be easily lost during refactoring.
**Prevention:** Use specific commit SHAs for actions, enforce least privilege for GITHUB_TOKEN, and always verify job-specific permission requirements after applying global restrictions.
