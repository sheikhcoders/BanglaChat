## 2025-05-15 - Package Manager Consistency in CI

**Learning:** Switching package managers in CI (e.g., npm to pnpm) without a corresponding lockfile (pnpm-lock.yaml) will cause build failures, especially when using --frozen-lockfile. Also, bundling multiple optimizations can violate the "one small improvement" constraint and complicate review.

**Action:** Always verify the presence of a lockfile before changing package managers in CI. Focus on a single, high-impact optimization per task to ensure safety and clarity.
