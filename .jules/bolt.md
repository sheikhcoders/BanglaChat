# Bolt's Performance Journal

This journal tracks critical performance learnings for BanglaChat.

## 2025-05-15 - Initialized Journal
**Learning:** Initialized the journal to track performance optimizations.
**Action:** Always document significant performance findings here.

## 2025-05-15 - CI Pipeline Efficiency
**Learning:** CI pipelines in uninitialized repositories can waste resources by failing on missing manifests. Supporting faster package managers like `pnpm` and adding concurrency groups significantly reduces total runner time and costs.
**Action:** Always include concurrency groups and bootstrap-aware checks in CI workflows. Use `paths-ignore` to skip runs for non-code changes.
