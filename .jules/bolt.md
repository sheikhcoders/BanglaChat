# Bolt's Journal - Critical Learnings

## 2026-07-30 - [CI Trigger and Architecture Optimization]

**Learning:** In early-stage or uninitialized repositories, running CI workflows on non-code changes (like README, pull request templates, issue templates, and performance journals) wastes GitHub Actions runner minutes. However, using restrictive positive path matching or custom checkout existence check scripts risks letting crucial root configuration changes (e.g. `next.config.js`, `tsconfig.json`) bypass CI validation entirely, or creating silent green checkmarks on broken PRs where `package.json` was deleted.
**Action:** Use secure `paths-ignore` triggers specifically targeting non-code/documentation files to skip unnecessary workflow execution, while guaranteeing that any other code, config, or manifest change triggers standard validation and fails correctly if essential packages are missing.

## 2026-08-01 - [CI Concurrency Controls & Paths Filtering]

**Learning:** Superseded commits on the same branch consume runner minutes and create bottlenecks. Implementing path filtering (`paths-ignore`) and concurrency controls (`cancel-in-progress: true` for CI) dramatically improves developer feedback loops and minimizes wasted resource consumption.
**Action:** Include strict concurrency group configurations on workflow files to conserve execution minutes, but always keep `cancel-in-progress: false` for pages/deployment jobs to avoid leaving deployments in an inconsistent state.
