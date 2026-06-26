## 2026-06-26 - GitHub Actions Hardening and Permission Inheritance
**Vulnerability:** CI/CD workflows were using over-privileged default tokens, mutable action tags (susceptible to supply chain attacks), and lacked execution timeouts.
**Learning:** Setting global `permissions: contents: read` is a best practice, but job-level permissions (like those required for GitHub Pages deployment) completely override the global set rather than merging with them. Forgetting to re-include `contents: read` at the job level can cause failures if the job needs to read the repository.
**Prevention:** Always pin actions to immutable commit SHAs. Use `timeout-minutes` to prevent resource exhaustion. When defining job-level permissions, explicitly list all required scopes, including `contents: read` if needed.

## 2026-06-26 - CI Resilience and "Broken Window" Syndrome
**Vulnerability:** Standard CI workflows often fail in uninitialized or sparse repositories because they expect manifest files (like `package.json`) that don't exist yet. This creates constant CI failures ("broken windows") that can desensitize developers to real security or build failures.
**Learning:** GitHub Actions steps (especially those involving caching or package managers) must be guarded with `if` conditions and graceful error handling when manifest files are missing.
**Prevention:** Use `hashFiles('package-lock.json') != ''` to conditionally enable caching or execution of `npm` steps. Ensure detection scripts exit with code 0 even if no environment is detected, allowing subsequent guarded steps to be skipped rather than failing the job.
