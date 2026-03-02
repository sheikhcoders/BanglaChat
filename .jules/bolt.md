## 2025-03-02 - Bootstrap CI Optimization
**Learning:** In early-stage repositories without application code or lockfiles, standard CI/CD workflows fail or waste resources. Implementing "Bootstrap-aware" logic (detecting manifests and conditionally skipping steps) prevents CI noise and saves runner minutes. Using faster package managers like `pnpm` from the start establishes a performance-first culture.
**Action:** Always include manifest detection steps and use concurrency controls to cancel redundant runs in any new project CI.
