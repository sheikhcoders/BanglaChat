# Sentinel's Journal

## 2026-04-27 - CI Workflow Hardening
**Vulnerability:** The Node.js CI workflow lacked explicit permission boundaries and used mutable action tags, exposing the pipeline to supply chain attacks and potential privilege escalation.
**Learning:** Pinning actions to immutable commit SHAs and defining minimal job-level permissions ('contents: read') provides defense-in-depth against malicious action updates.
**Prevention:** Implement mandatory SHA pinning and granular permissions for all GitHub Actions workflows.
