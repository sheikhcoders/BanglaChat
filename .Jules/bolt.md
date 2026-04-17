# Bolt's Performance Journal

## 2026-04-17 - CI Compute Optimization and Robustness
**Learning:** Redundant CI runs for non-code changes (README, journals) and outdated commits waste compute resources. Additionally, standard CI templates fail in uninitialized repositories lacking package manifests or lockfiles.
**Action:** Implement 'paths-ignore' for non-code files, enable 'concurrency: cancel-in-progress: true', and use a 'Detect package manager' step with conditional guards to ensure CI stability and efficiency across all repository states.
