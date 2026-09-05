## 2026-09-05 - GitHub Actions CI Speed & Compute Efficiency Optimization

**Learning:** Uninitialized repositories without `package.json` trigger immediate workflow failures in `setup-node` when caching is configured (`cache: 'npm'`). Additionally, redundant CI runs on doc-only changes or rapid sequential commits waste GitHub Actions runner compute time.
**Action:** Add zero-cost inline `package.json` existence step guards (`steps.check_files.outputs.has_package_json == 'true'`), `paths-ignore` filters for non-code files, `concurrency` cancellation controls (`cancel-in-progress: true`), and 15-minute execution timeouts (`timeout-minutes: 15`).
