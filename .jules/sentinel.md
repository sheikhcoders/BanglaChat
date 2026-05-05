# Sentinel Journal

## 2026-05-05 - CI Security Hardening
**Vulnerability:** Insecure CI/CD workflows (unpinned actions, excessive permissions, lack of timeouts).
**Learning:** Default GitHub Actions templates often lack strict security configurations, making them vulnerable to supply chain attacks and resource exhaustion.
**Prevention:** Always pin actions to full-length commit SHAs, enforce minimal job-level permissions, and set explicit timeouts.
