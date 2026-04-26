## 2026-04-26 - CI Optimization in Uninitialized Repositories
**Learning:** In uninitialized repositories (lacking source code or package manifests), CI workflow optimization for compute savings is the primary performance lever. Implementing `paths-ignore` for documentation and `cancel-in-progress` for outdated runs provides immediate efficiency gains.
**Action:** Prioritize CI resource management in the bootstrap phase of a project to prevent wasted compute on non-code changes and documentation updates.
