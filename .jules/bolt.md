# Bolt's Journal ⚡

## 2026-07-30 - CI/CD Performance Anti-Patterns: Runtime Overhead vs. Native Solutions
**Learning:** Adding custom, sequential pre-jobs or step-level checks to dynamically check file existence (like `package.json`) inside GHA workflows is a performance anti-pattern. While it bypasses failures in uninitialized states, it degrades normal pipelines by introducing sequential overhead (adding 15-30s to *every* standard run) and masks critical failures (silent passes).
**Action:** Use native, zero-overhead GHA features like path-filtering (`paths-ignore` for doc changes) and native concurrency controls. Avoid runner-based environmental checks for static configurations that are better handled by standard build steps.
