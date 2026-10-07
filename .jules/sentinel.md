# Sentinel's Journal - Critical Security Learnings

## 2026-10-09 - Hardening Node.js CI Workflow and Supply Chain Guarding
**Vulnerability:** Default unpinned GitHub Actions and missing permissions / step guards in Node CI workflows create potential supply chain vectors and build failures in uninitialized repos.
**Learning:** Pinning actions to 40-character SHAs (`actions/checkout` v4.2.2 and `actions/setup-node` v4.2.0), enforcing `permissions: contents: read`, `persist-credentials: false`, setting explicit execution timeouts, and guarding `package.json` execution prevents tag-hijacking supply chain attacks and CI failures.
**Prevention:** Always enforce explicit least-privilege permissions, commit SHA action pinning, timeouts, credential protection, and step guards across all workflow configurations.
