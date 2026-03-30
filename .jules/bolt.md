## 2025-03-30 - CI Workflow Resource Optimization
**Learning:** Implementing `paths-ignore` for documentation and journal files (`README.md`, `.jules/**`) provides a significant performance boost for non-functional updates by skipping unnecessary CI builds. Hardening workflows with `timeout-minutes` and `cancel-in-progress: true` prevents resource waste and ensures faster feedback for active development.
**Action:** Always include `paths-ignore` for documentation and metadata files in new CI workflows and enforce resource limits and concurrency controls to optimize repository compute consumption.

## 2025-03-30 - CI Hardening with Bootstrap Guards
**Learning:** In uninitialized repositories (lacking `package.json` or lockfiles), CI workflows will fail when attempting to cache dependencies or run scripts. Implementing "Bootstrap Guards" (conditional steps and fallback directories) ensures CI success for documentation-only updates. Additionally, opting into Node 24 resolves deprecation warnings and future-proofs CI.
**Action:** Guard all dependency-related steps with `if: hashFiles('package.json') != ''` and provide fallback artifact paths in uninitialized states. Always set `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` to align with the repository's supply chain security standards.
