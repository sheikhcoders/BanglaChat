## 2026-04-21 - CI Compute Optimization for Uninitialized Repositories
**Learning:** In repositories without a `package.json`, standard CI workflows fail early and waste compute. Implementing `paths-ignore` for non-code files and conditional guards for package-dependent steps saves resources and provides faster feedback.
**Action:** Always implement `paths-ignore` and file existence checks in CI workflows, especially during the bootstrap phase of a project.
