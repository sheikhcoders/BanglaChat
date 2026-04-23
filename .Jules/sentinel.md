# Sentinel Journal 🛡️

## 2026-04-23 - GitHub Actions Supply Chain Hardening
**Vulnerability:** Use of mutable tags (e.g., `@v4`) for GitHub Actions allows for potential supply chain attacks if the tag is pointed to a malicious commit. Lack of explicit permissions and timeouts can lead to token leakage or resource exhaustion.
**Learning:** Hardening CI/CD workflows is a critical defense-in-depth measure, especially in uninitialized or early-stage repositories where application-level security might not yet be fully implemented.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs and specify minimal necessary permissions and job timeouts.
