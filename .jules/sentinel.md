# Sentinel Security Journal

## 2026-09-09 - CI/CD Workflow Hardening & Least Privilege Policy
**Vulnerability:** GitHub Actions CI workflows executing with default permissive `GITHUB_TOKEN` permissions, unpinned third-party action tags susceptible to supply chain tag hijacking, credential persistence on runner checkouts, and missing execution timeouts leading to potential compute resource depletion. Uninitialized repository states without `package.json` caused setup-node caching failures.
**Learning:** Hardening CI workflows requires explicit `permissions: contents: read` declarations, pinning third-party GitHub Actions to 40-character commit SHAs, setting `persist-credentials: false`, enforcing `timeout-minutes: 15`, and adding inline file checks (`if: steps.check_files.outputs.has_package_json == 'true'`).
**Prevention:** Always enforce read-only token permissions, SHA pinning, credential non-persistence, and step existence guards when creating or editing GitHub Actions workflows.
