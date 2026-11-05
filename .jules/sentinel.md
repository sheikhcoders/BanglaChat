# Sentinel's Journal - Critical Security Learnings

## 2026-11-05 - CI Workflow Security Hardening and Execution Guards in Uninitialized Repositories
**Vulnerability:** Default GitHub Actions workflows execute with broad token permissions, persist the `GITHUB_TOKEN` credential inside `.git/config` on runner disk, lack execution timeouts (leaving them vulnerable to compute exhaustion/DoS), and fail unconditionally when default caching expects `package-lock.json` in an uninitialized repository.
**Learning:** In uninitialized repositories without project lockfiles or code, CI workflows should be proactively secured against credential exposure and runaway resource consumption using explicit top-level read-only permissions (`permissions: contents: read`), checkout credential protection (`persist-credentials: false`), and job timeouts (`timeout-minutes: 15`), while guarding build/test steps with `hashFiles('package.json') != ''`.
**Prevention:** Always declare explicit least-privilege permissions, disable credential persistence on checkout actions, set reasonable job execution timeouts, and ensure workflow steps check for the presence of target manifests before running.
