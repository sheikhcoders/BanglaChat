## 2026-06-12 - Bilingual Documentation Accessibility
**Learning:** For apps targeting specific language groups, bilingual documentation (English/Bengali) with semantic `<span lang="...">` tags significantly improves accessibility for screen readers. The transliteration of technical terms like 'Pull Request' must be culturally and linguistically accurate—'পুল রিকোয়েস্ট' (Pul Request) is the correct term, whereas 'পুলি' (Puli) incorrectly refers to a mechanical pulley or a dumpling.
**Action:** Always use semantic language tags for non-English content and verify technical transliterations with the project's established vocabulary.

## 2026-06-12 - CI Resilience in Sparse Repositories
**Learning:** In projects that frequently reset to a sparse state, CI workflows must be hardened with job-level guards (`if: hashFiles('package.json') != ''`) and `paths-ignore` for documentation. This prevents unnecessary build failures and caching errors when only documentation or metadata is updated.
**Action:** Implement resilient job-level guards in all CI workflows to handle uninitialized repository states gracefully.
