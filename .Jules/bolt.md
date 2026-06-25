## 2026-06-25 - [CI Efficiency & Resilience]
**Learning:** CI optimizations (like `cache: 'npm'`) can cause failures in uninitialized repositories if they expect manifest files (e.g., `package-lock.json`) to exist. Performance wins must be guarded by resilience logic.
**Action:** Always implement conditional logic (e.g., `if: hashFiles('package.json') != ''`) when adding performance-oriented CI steps to ensure they don't break the build in early-stage repositories.
