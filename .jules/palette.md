## 2025-02-15 - Bilingual README for Inclusivity

**Learning:** For repositories without application code, providing immediate bilingual support (e.g., English and Bengali) in the README is a high-leverage UX win that ensures inclusivity from the project's inception.
**Action:** Always consider the target audience's native language for documentation and use aria-hidden="true" for decorative emojis to reduce screen reader noise.

## 2025-02-15 - CI Guards for Empty Repositories

**Learning:** In early-stage repositories, CI workflows can fail if they assume a package manager manifest exists. Using job-level `if: hashFiles('package.json') != ''` guards prevents these failures while maintaining validation for when the project is eventually initialized.
**Action:** Always include manifest guards in boilerplate CI workflows to ensure a green status for the repository during its "docs-only" phase.
