## 2025-05-15 - Hardened CI Workflows
**Vulnerability:** Use of mutable GitHub Action version tags (e.g., @v4) which can be updated to point to malicious code.
**Learning:** Pinning actions to immutable commit SHAs is a critical defense-in-depth measure against supply chain attacks.
**Prevention:** Always use full commit hashes for third-party actions and define explicit job-level permissions.

## 2025-05-15 - Workflow Guards for Uninitialized Repos
**Vulnerability:** CI failures caused by enabling caching or running build steps in repositories without `package.json` or lockfiles.
**Learning:** Hardening actions (like pinning) doesn't protect against infrastructure failures; workflows must be resilient to the project's current state.
**Prevention:** Use the "Bootstrap Guard" pattern: `cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}` and job-level `if` checks for manifest presence.
