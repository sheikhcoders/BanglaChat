# Bolt's Performance Journal

This journal tracks critical performance learnings, bottlenecks, and architectural insights for BanglaChat.

## 2025-03-01 - Bootstrap-aware CI
**Learning:** In uninitialized repositories, generic CI workflows often fail because they expect a `package.json` or lockfile that doesn't exist yet. This creates "false failure" noise and wastes runner minutes.
**Action:** Implement "Bootstrap-aware" detection in CI workflows to gracefully skip JS-specific steps when the project is still in a foundational state, and ensure concurrency controls are in place from day one to save resources.
