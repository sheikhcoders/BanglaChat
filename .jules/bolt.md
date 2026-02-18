# Bolt's Performance Journal

## 2026-02-18 - CI Workflow Optimization

**Learning:** Adding concurrency control with `cancel-in-progress: true` in CI workflows is a high-leverage performance win for development speed and resource efficiency, as it prevents redundant runs on the same branch.
**Action:** Always include concurrency groups in new CI workflows to save 20-40% of Actions minutes.

## 2026-02-18 - Resilient Node.js CI

**Learning:** `actions/setup-node` with `cache: 'npm'` fails if no lockfile (`package-lock.json`, `yarn.lock`, etc.) is present. In early-stage repositories without these files, CI must be hardened to skip manifest-based steps gracefully.
**Action:** Use `hashFiles(...) != ''` to conditionally enable caching and step execution in repositories that might not yet have a package manifest.
