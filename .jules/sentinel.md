## 2026-06-19 - CI/CD Hardening in Sparse Repository
**Vulnerability:** CI workflows in uninitialized repositories are susceptible to supply chain attacks via mutable tags, token leakage due to overly permissive default permissions, and resource exhaustion from hanging processes.
**Learning:** In a sparse repository state (e.g., missing `package.json`), GitHub Actions like `setup-node` can fail if caching is enabled without a lockfile. Additionally, default permissions are often too broad.
**Prevention:** Always pin actions to verified commit SHAs, enforce global `permissions: contents: read`, implement `timeout-minutes`, and use conditional guards (`hashFiles`) to ensure CI only runs when relevant files exist and can be safely cached.
