## 2026-05-12 - Hardened GitHub Actions Workflows
**Vulnerability:** Supply chain risk through mutable version tags and overly permissive default CI permissions.
**Learning:** Pinning actions to full-length commit SHAs (e.g., `actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683`) provides immutability and protection against tag-jacking. Combining this with `persist-credentials: false` and explicit `contents: read` permissions follows the principle of least privilege.
**Prevention:** Always pin GitHub Actions to SHAs, restrict job permissions, and use timeouts to prevent resource exhaustion.
