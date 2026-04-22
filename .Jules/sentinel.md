## 2026-04-22 - CI Hardening and Supply Chain Protection
**Vulnerability:** Supply chain risks from mutable GitHub Action tags and overly permissive default CI permissions.
**Learning:** Standard CI templates often fail in uninitialized repositories when assuming the presence of `package.json` or lockfiles. Pinning actions to SHAs and restricting permissions to `contents: read` is a critical defense-in-depth layer.
**Prevention:** Always pin actions to full commit SHAs, define minimal job-level permissions, and implement robust package manager detection with guards for install/build/test steps to handle uninitialized states gracefully.
