## 2026-03-10 - CI/CD Efficiency as a Foundational Performance Asset
**Learning:** In uninitialized repositories, default CI workflows frequently fail or waste resources due to missing manifest files (`package.json`, `package-lock.json`). Implementing "Bootstrap Guard" patterns (conditional job execution) and concurrency controls early prevents wasting CI minutes and provides a faster, more reliable feedback loop for developers.
**Action:** Always implement `concurrency` controls, `paths-ignore` for non-code changes, and conditional execution logic for dependency-related steps in new or minimal repositories.

## 2026-03-10 - Balancing CI Optimization with Operational Requirements
**Learning:** Over-aggressive CI optimizations, such as enabling `cancel-in-progress` on production deployment pipelines, can violate operational requirements (e.g., non-atomic deployments). Additionally, "Bootstrap Guards" that mask missing configuration (like a missing lockfile) can lead to confusing failures later in the pipeline.
**Action:** Always respect documented constraints in workflow files (e.g., concurrency groups for deployments) and ensure conditional logic doesn't skip critical setup steps (like dependency installation) if the project manifest is present.
