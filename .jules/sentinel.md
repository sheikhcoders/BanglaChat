## 2025-05-15 - Hardened CI Workflows
**Vulnerability:** Use of mutable GitHub Action version tags (e.g., @v4) which can be updated to point to malicious code.
**Learning:** Pinning actions to immutable commit SHAs is a critical defense-in-depth measure against supply chain attacks.
**Prevention:** Always use full commit hashes for third-party actions and define explicit job-level permissions.
