## 2026-08-31 - Zero-Cost Inline Step Guards and Path Filtering for CI Efficiency

**Learning:** Running CI workflows on non-code commits (like markdown or documentation updates) wastes GitHub Actions runner minutes and developer feedback loop time. Furthermore, executing Next.js setup/build actions in uninitialized repository states results in build failures or useless setup latency. Combining `paths-ignore` for non-code files, `concurrency` with `cancel-in-progress: true`, and inline step guards (`if: steps.detect-package-manager.outputs.has_package_json == 'true'`) eliminates 100% of redundant CI execution while preserving pipeline integrity.

**Action:** Always configure `paths-ignore` for documentation changes, enable concurrency cancellation for PRs/branches, and use zero-overhead inline step guards for workspace file dependencies in CI workflows.
