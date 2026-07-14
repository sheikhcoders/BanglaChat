## 2026-07-14 - Bilingual Documentation as Primary UX
**Learning:** In uninitialized repositories lacking a functional UI, documentation (README) and templates (Pull Request) serve as the primary interface for developers. Prioritizing bilingual accessibility in these early files establishes an inclusive foundation for the project.
**Action:** Always include bilingual (English/Bengali) support in documentation and templates for BanglaChat to ensure accessibility for all target users.

## 2026-07-14 - CI Hardening for Uninitialized Repositories
**Learning:** Documentation-only PRs in uninitialized repositories can trigger CI failures if workflows expect a `package.json` or other manifests. Implementing job-level guards like `if: hashFiles('package.json') != ''` and `paths-ignore` prevents these failures and saves runner minutes.
**Action:** Symmetrically harden all CI workflows when making documentation changes in uninitialized states to ensure a smooth developer experience.
