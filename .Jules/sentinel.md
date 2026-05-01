# Sentinel's Security Journal

## 2026-05-01 - [CI Supply Chain Hardening]
**Vulnerability:** Use of mutable tags for GitHub Actions and overly permissive default permissions.
**Learning:** Pinning actions to full-length commit SHAs provides cryptographic certainty, while minimal permissions reduce the blast radius.
**Prevention:** Always pin actions to SHAs and enforce job-level permissions.
