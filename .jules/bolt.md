## 2026-07-11 - [Optimize CI Workflows via Path Filtering]
**Learning:** Adding `paths-ignore` for documentation and journal files prevents redundant CI builds, saving valuable actions minutes in an uninitialized repository.
**Action:** Implement `paths-ignore` for `README.md` and `.jules/**` across all workflow definitions.

## 2026-07-13 - [CI Deployment Interruption Avoidance]
**Learning:** In Next.js pages or main deployment workflows, setting `cancel-in-progress: true` can interrupt running production deployments. Keeping it `false` ensures safe, complete production deployments.
**Action:** Maintain `cancel-in-progress: false` for all production deployment pipelines.
