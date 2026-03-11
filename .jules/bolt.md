## 2025-12-11 - CI Resource Optimization in Minimal Repositories
**Learning:** In the early bootstrap phase of a project, CI workflows often lack essential resource-saving configurations like concurrency controls and path-based filtering. This leads to redundant builds and wasted CI minutes, especially when multiple agents or contributors are making small, rapid changes to documentation or configuration.
**Action:** Always implement `concurrency` groups with `cancel-in-progress: true` and `paths-ignore` for non-code directories (like `.jules/`) in the initial CI setup to ensure efficient resource usage and faster feedback loops.

## 2025-12-11 - Fixing CI in Uninitialized Repositories
**Learning:** Standard GitHub Actions templates often assume the presence of manifest files (`package.json`, `package-lock.json`). In uninitialized or "bootstrap" repositories, these actions (especially `actions/setup-node` with caching) will fail. Using job-level or step-level `if: hashFiles(...)` conditions or conditional outputs from a detection step is necessary to make CI workflows resilient during early project phases.
**Action:** Implement "Bootstrap Guard" patterns: make `cache` properties and execution steps (install, build, test) conditional on the physical presence of manifest files to avoid blocking CI failures in empty repositories.
