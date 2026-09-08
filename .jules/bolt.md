## 2026-09-08 - CI Compute Efficiency & Zero-Cost Step Guards
**Learning:** Default CI workflows waste substantial runner compute and fail unnecessarily on uninitialized repos when non-code files (documentation/journals) change or when package manifests are missing.
**Action:** Always configure `paths-ignore` for non-code files, enable `cancel-in-progress: true` under concurrency groups, enforce `timeout-minutes`, and use zero-cost inline step guards (`steps.check_files.outputs.has_package_json == 'true'`) to skip setup-node and package manager execution on uninitialized repositories.
