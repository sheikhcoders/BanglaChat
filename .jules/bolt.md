## 2026-02-17 - CI Path-Filtering vs. Required Status Checks
**Learning:** Aggressive path filtering (like `paths-ignore: ['**.md']`) in CI workflows that serve as required status checks can block Pull Requests from merging if the ignored files are the only ones changed. GitHub considers the check as "Expected" rather than "Skipped/Success" in some configurations, preventing the merge.
**Action:** Avoid using broad `paths-ignore` (especially for `.md` or internal agent notes) in core CI workflows like `node.js.yml` if they are likely to be required checks. Apply these filters only to deployment-specific or secondary workflows.

## 2026-02-17 - CI Hardening for Uninitialized Repositories
**Learning:** GitHub Actions workflows that expect specific manifests (like `package.json` or lock files) will fail in uninitialized or documentation-only repositories if they attempt to perform operations like dependency installation or caching. `actions/setup-node@v4` with `cache: 'npm'` explicitly fails if no lock file is found.
**Action:** Implement "found" outputs or `hashFiles` guards to skip manifest-dependent steps gracefully. For multi-job workflows, expose these findings as job outputs to allow dependent jobs (like `deploy`) to skip execution, saving Actions minutes and avoiding "Expected" check failures.
