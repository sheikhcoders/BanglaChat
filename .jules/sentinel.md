## 2026-02-24 - CI Hardening Side Effects in Uninitialized Repositories

**Vulnerability:** CI workflows failing due to missing package manifests when hardening with `cache` options.
**Learning:** Hardening CI workflows with caching and strict dependency steps (`npm ci`) in a repository that is still uninitialized (missing `package.json`) leads to immediate failures. The standard `setup-node` caching expects a lockfile to be present.
**Prevention:** Implement a "Bootstrap-aware CI" pattern that detects the presence of a package manifest and source directories before attempting to run Node.js-specific tasks. Use job/step-level `if` guards to gracefully skip these tasks if the repository is uninitialized.
