## 2026-07-20 - Workflow Hardening & Supply Chain Security
**Vulnerability:** GitHub Actions workflows executing third-party actions via mutable tags or versions, running without explicit content permissions, lacking step execution guards, or omitting execution timeouts in uninitialized states.
**Learning:** Hardening GHA files requires pinning actions to immutable 40-character commit SHAs, configuring timeouts to prevent runaway runner costs, and implementing post-checkout step guards to cleanly bypass package manager/build phases when `package.json` is missing.
**Prevention:** Always enforce global and job-level `permissions: contents: read` unless writes are required, pin dependencies, configure a 15-minute job-level timeout, and check manifest file existence after the checkout step.
