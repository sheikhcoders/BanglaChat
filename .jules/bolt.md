# Bolt's Performance Journal

## 2026-02-21 - Optimizing CI for Uninitialized Repositories

**Learning:** CI workflows that lack manifest detection (e.g., checking for `package.json`) will fail or run uselessly in repositories that are still in early development phases. This wastes Actions minutes and developer time.
**Action:** Always implement a "Bootstrap-aware" detection step that sets a `found` flag to gracefully skip manifest-dependent steps, and use `concurrency` to cancel redundant runs.
