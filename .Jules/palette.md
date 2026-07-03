## 2026-07-03 - Initializing Palette Journal
**Learning:** In uninitialized repositories lacking an application UI, documentation (README.md) and contributor templates (.github/PULL_REQUEST_TEMPLATE.md) serve as the primary user interfaces; bilingual accessibility using semantic <span lang="bn"> tags is critical for screen reader support in these entry points.
**Action:** Always implement bilingual support with proper language tags in documentation when the project is identified as multilingual.

## 2026-07-03 - CI Resilience for Uninitialized Repositories
**Learning:** A failing CI in a new repository creates immediate friction and a poor first impression for developers. Ensuring workflows "fail gracefully" or skip irrelevant steps in an uninitialized state is a critical micro-UX (DX) improvement.
**Action:** Implement manifest guards (`if: hashFiles('package.json') != ''`) and conditional caching in CI workflows to handle uninitialized repository states.
