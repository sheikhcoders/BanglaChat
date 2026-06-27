## 2026-06-27 - Bilingual Accessibility in Documentation
**Learning:** In uninitialized repositories lacking an application UI, documentation (README.md) and contributor templates (.github/PULL_REQUEST_TEMPLATE.md) serve as the primary user interfaces; bilingual accessibility using semantic <span lang="bn"> tags is critical for screen reader support in these entry points.
**Action:** Establish bilingual accessibility standards in foundational documentation early in the project lifecycle.

## 2026-06-27 - CI Infrastructure Exception for Palette
**Learning:** While infrastructure changes are typically out of scope for Palette, direct user requests to fix CI failures that block a PR create a necessary exception. Correcting CI to handle uninitialized repository states is essential for ensuring that accessibility improvements can be merged and verified.
**Action:** Implement CI resilience guards (conditional caching and skip logic) when working in repositories without manifest files.
