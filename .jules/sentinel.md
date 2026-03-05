# Sentinel Security Journal 🛡️

## 2025-03-05 - Foundational CI/CD and Repository Hardening

**Vulnerability:** Initial repository lacked explicit security policy and CI/CD workflows followed insecure defaults (unrestricted permissions, no timeouts, persistent credentials).
**Learning:** Default GitHub Action configurations often grant more permissions than necessary and lack defensive measures against resource exhaustion or credential theft.
**Prevention:** Always implement least-privilege permissions, set execution timeouts, and disable credential persistence in checkout actions from the start of a project.
