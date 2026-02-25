# Bolt's Performance Journal ⚡

## 2025-02-25 - CI Efficiency Boost
**Learning:** CI/CD pipelines are often the most frequent "bottleneck" in early-stage projects. Canceling redundant runs and ignoring non-code changes (like journal entries) saves significant runner time and provides faster feedback loops. Supporting faster package managers like `pnpm` from the start ensures the project scales efficiently.
**Action:** Always implement `paths-ignore` for documentation and `concurrency` for branch builds to maximize resource efficiency.
