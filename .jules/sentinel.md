## 2026-06-17 - CI Resilience in Uninitialized Repositories
**Vulnerability:** CI workflows (`node.js.yml`, `nextjs.yml`) trigger on every push but fail terminal errors when `package.json` or lockfiles are missing, potentially stalling PRs and leaking default `GITHUB_TOKEN` permissions if not hardened.
**Learning:** Hardening global permissions to `contents: read` and pinning SHAs provides base security, but repository-specific guards (e.g., `if: hashFiles('package.json') != ''`) are necessary to prevent noise and compute waste in the sparse repository state.
**Prevention:** Enforce global `permissions: contents: read`, pin actions to verified SHAs, and implement `has_package` logic gates in workflows to handle the initial setup phase securely and gracefully.
