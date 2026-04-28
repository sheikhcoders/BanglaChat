## 2026-04-28 - Supply Chain Hardening for CI Workflows
**Vulnerability:** GitHub Actions workflows using mutable tags (e.g., `@v4`) are susceptible to supply chain attacks if the tag is pointed to a malicious commit. Additionally, default permissions were overly broad.
**Learning:** Pinning actions to full-length commit SHAs provides cryptographic certainty of the code being executed. Job-level permissions minimize the blast radius of a compromised action.
**Prevention:** Always pin actions to SHAs and use the `permissions` block to enforce least privilege in all new workflows.
