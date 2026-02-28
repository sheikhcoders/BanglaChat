# Sentinel Security Journal

This journal tracks critical security learnings for the BanglaChat project.

## 2026-02-28 - Repository Hardening
**Vulnerability:** Lack of explicit security policy and least-privilege CI configurations.
**Learning:** Initializing a repository with security-first CI/CD and clear reporting guidelines reduces the window for accidental exposure and misconfiguration.
**Prevention:** Always include `SECURITY.md` and harden GitHub Actions (permissions, timeouts, `persist-credentials: false`) during the bootstrap phase.
