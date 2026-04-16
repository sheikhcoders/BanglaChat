# Sentinel's Security Journal

## 2026-04-16 - Hardened CI/CD Workflows & Established Security Policy
**Vulnerability:** Supply chain attacks via compromised third-party GitHub Actions.
**Learning:** Pinning GitHub Actions to full-length commit SHAs and defining minimal job-level permissions (e.g., `permissions: contents: read`) is a critical defense-in-depth strategy used in this repository to mitigate supply-chain risks.
**Prevention:** Always pin actions to SHAs and specify minimal permissions in all workflow files.
