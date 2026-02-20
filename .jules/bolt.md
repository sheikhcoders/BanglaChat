## 2025-05-15 - CI Workflow Efficiency in Early-Stage Repositories
**Learning:** In repositories without application code or manifests, CI workflows often fail unnecessarily or waste resources on redundant runs. Using the "Bootstrap-aware" pattern (detecting manifests before running commands) and adding concurrency control with `cancel-in-progress: true` significantly improves developer experience and resource efficiency.
**Action:** Always implement manifest detection and concurrency control in CI workflows, especially for projects in early development.
