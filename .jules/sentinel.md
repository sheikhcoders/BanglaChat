## 2026-08-20 - GitHub Actions Supply Chain & Workflow Hardening in Uninitialized Repos

**Vulnerability:** CI/CD workflows executing third-party actions with mutable tags (`@v4`), unconstrained write/default permissions, unbounded execution timeouts, and implicit assumptions about `package.json` availability leading to build failures or potential token exfiltration risks.
**Learning:** In uninitialized or template repositories without `package.json`, default Node setup steps fail unless guarded with conditional checks. Additionally, omitting explicit `permissions` or pinning actions to tags allows supply chain risks if upstream action releases are modified or hijacked.
**Prevention:** Always pin third-party GitHub Actions to 40-character commit SHAs, enforce explicit `permissions: contents: read`, set `timeout-minutes: 15`, disable persistent credentials (`persist-credentials: false`), and add inline file existence guards before running package-dependent setup steps.
