# Sentinel's Security Journal

## 2026-04-16 - Hardened CI/CD Workflows & Established Security Policy
**Vulnerability:** Supply chain attacks via compromised third-party GitHub Actions.
**Learning:** Pinning GitHub Actions to full-length commit SHAs and defining minimal job-level permissions (e.g., `permissions: contents: read`) is a critical defense-in-depth strategy used in this repository to mitigate supply-chain risks.
**Prevention:** Always pin actions to SHAs and specify minimal permissions in all workflow files.

## 2026-04-16 - Robustness in Uninitialized Repositories
**Vulnerability:** CI/CD failures due to missing manifest files in early-stage projects.
**Learning:** In uninitialized repositories, robust GitHub Action workflows must implement a 'Detect package manager' step that sets fallback variables (e.g., command=install) if no lockfile is found, while wrapping build/test steps in conditional guards (e.g., `if: steps.detect-manager.outputs.manager != ''`) to prevent fatal errors when `package.json` is missing entirely.
**Prevention:** Guard all package-manager-dependent steps with file existence checks or conditional logic.
