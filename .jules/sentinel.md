## 2026-06-19 - CI/CD Pipeline Hardening
**Vulnerability:** Supply chain risks from mutable action tags and overly permissive default GITHUB_TOKEN permissions.
**Learning:** Default CI workflows often use broad permissions and mutable tags (e.g., @v4) that can be compromised. Explicitly defining least privilege and pinning commit SHAs mitigates these risks.
**Prevention:** Always set global `permissions: contents: read` (or narrower) and pin all third-party actions to verified commit SHAs.
