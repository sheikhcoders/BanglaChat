# Sentinel Journal

## 2026-10-06 - GitHub Actions Workflow Hardening for Uninitialized Repositories
**Vulnerability:** Default CI workflows without explicit permissions can inherit write access, run without execution time limits, persist ambient git credentials (`GITHUB_TOKEN`), and fail on uninitialized repository states.
**Learning:** In repositories without `package.json` or lockfiles, running default `npm` steps causes build failures or unpredictable runner behaviors, while missing workflow execution limits risks runner exhaustion or unauthorized git pushes.
**Prevention:** Always enforce top-level read-only permissions (`permissions: contents: read`), cap job execution timeouts (`timeout-minutes: 15`), set `persist-credentials: false` on checkout, pin third-party GitHub Actions to 40-character commit SHAs, and guard dependency steps with inline file existence checks.
