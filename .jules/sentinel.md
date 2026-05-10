# Sentinel Journal 🛡️

## 2026-05-09 - CI Hardening
**Vulnerability:** Default GitHub Actions templates use mutable tags (e.g., @v4) and lack explicit permissions, which can lead to supply chain attacks or accidental token misuse.
**Learning:** Hardening CI workflows by pinning actions to immutable SHAs and enforcing granular permissions (contents: read) provides a robust defense-in-depth layer.
**Prevention:** In all future projects, initialize workflows with pinned SHAs and minimum required permissions from the start.
