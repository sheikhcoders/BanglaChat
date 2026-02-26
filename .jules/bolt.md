## 2025-02-26 - CI Efficiency and Resource Conservation
**Learning:** GitHub Actions default behavior of running multiple workflows for every push to any branch can lead to significant resource waste. Using path-based filtering (`paths-ignore`) prevents CI from firing on documentation/journal-only changes, and concurrency groups with conditional `cancel-in-progress` ensure that only the latest commit on a feature branch is being tested, while preserving history on the main branch.
**Action:** Always include concurrency groups and path filtering in workflow definitions to optimize CI feedback loops and reduce runner cost/usage.

## 2025-02-26 - Bootstrap-Aware CI for Uninitialized Repositories
**Learning:** Standard GitHub Actions templates (like `node.js.yml`) often assume the existence of a `package-lock.json` or `yarn.lock`. In uninitialized or bootstrap-phase repositories, `actions/setup-node@v4` will fail if `cache: 'npm'` is set but no lockfile exists.
**Action:** Implement a "detection" step at the start of workflows to check for manifests and lockfiles. Guard all dependency-reliant steps with `if` conditions based on these checks to ensure CI remains green during the early stages of a project's lifecycle.
