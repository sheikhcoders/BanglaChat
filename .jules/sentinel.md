## 2025-05-14 - Supply Chain Hardening via Action SHA Pinning
**Vulnerability:** Potential supply chain attacks through mutable GitHub Action version tags.
**Learning:** Version tags (like @v4) are mutable and can be pointed to malicious code without notice, bypassing review.
**Prevention:** Always pin GitHub Actions to immutable commit SHAs and provide the tag version as a comment for readability.

## 2025-05-14 - CI Stability via Bootstrap Guards
**Vulnerability:** CI/CD pipeline breakage during early repository initialization or documentation-only updates.
**Learning:** Standard CI templates assume the presence of `package.json`, causing failures that block initial repository setup and non-code contributions.
**Prevention:** Implement 'Bootstrap Guards' using `hashFiles` or shell conditionals to skip code-dependent steps when manifests are missing.
