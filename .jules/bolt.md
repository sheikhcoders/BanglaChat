## 2025-05-15 - Package Manager Consistency in CI

**Learning:** Switching package managers in CI (e.g., npm to pnpm) without a corresponding lockfile (pnpm-lock.yaml) will cause build failures, especially when using --frozen-lockfile. Also, bundling multiple optimizations can violate the "one small improvement" constraint and complicate review.

**Action:** Always verify the presence of a lockfile before changing package managers in CI. Focus on a single, high-impact optimization per task to ensure safety and clarity.

## 2025-05-15 - Resilient CI for Uninitialized Repos

**Learning:** GitHub Actions' `setup-node` with `cache: 'npm'` fails if `package-lock.json` is missing. This causes CI failures in repositories that are still being initialized or only contain documentation.

**Action:** Use `if: hashFiles('package-lock.json') != ''` on jobs or steps that rely on Node.js dependency management to ensure CI remains green while the repository structure is still evolving.
