## 2026-05-16 - Respecting Deployment Safety in CI
**Learning:** Even when optimizing for performance (like adding `cancel-in-progress: true`), it is critical to respect existing safety constraints in deployment workflows. Deployment workflows often have explicit requirements to avoid partial or aborted deployments that could leave the environment in an inconsistent state.
**Action:** Always read comments in workflow files carefully and prioritize deployment stability over minor compute savings in deployment jobs.

## 2026-05-16 - Consistent Package Manager Support
**Learning:** Adding support for a new package manager (like `pnpm`) requires a comprehensive update across all related workflow steps, including setup actions, caching logic (lockfile hashes), and execution commands, to ensure correctness and efficiency.
**Action:** When introducing a new tool or pattern in one workflow, ensure consistency across all other workflows in the project.
