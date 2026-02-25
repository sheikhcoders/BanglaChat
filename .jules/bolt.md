# Bolt's Performance Journal ⚡

## 2025-02-25 - CI Efficiency Boost
**Learning:** CI/CD pipelines are often the most frequent "bottleneck" in early-stage projects. Canceling redundant runs and ignoring non-code changes (like journal entries) saves significant runner time and provides faster feedback loops. Supporting faster package managers like `pnpm` from the start ensures the project scales efficiently. Additionally, implementing "Bootstrap-aware CI" (guarding caching and manifest-dependent steps) prevents failures in uninitialized repositories while maintaining optimal performance once they are set up.
**Action:** Always implement `paths-ignore` for documentation, `concurrency` for branch builds, and guard `setup-node` caching to maximize resource efficiency and reliability.
