# Sentinel Security Journal

## 2025-03-03 - Hardening CI/CD and Repository Security Foundation
**Vulnerability:** Insecure default CI configurations and missing security reporting guidelines.
**Learning:** Default GitHub Action workflows often lack explicit permissions, timeouts, and credential persistence controls, increasing the attack surface in case of compromised dependencies or runner environments.
**Prevention:** Always enforce least-privilege permissions (`contents: read`), set job timeouts, and disable credential persistence (`persist-credentials: false`) in CI workflows. Establish a clear vulnerability reporting process (`SECURITY.md`) from the start.
