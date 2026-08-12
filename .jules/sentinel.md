# Sentinel's Critical Security Learning Journal

This journal documents critical security learnings, vulnerability discoveries, and supply chain hardening lessons learned in the BanglaChat repository.

## 2026-08-05 - GitHub Actions Supply Chain Mitigations
**Vulnerability:** Default permissive workflow settings and unpinned third-party actions can lead to token leakage, repository tampering, and supply chain compromised builds.
**Learning:** Limiting execution privileges and using immutable commit SHAs for actions prevents dependency and build hijacking.
**Prevention:** Pin third-party actions to immutable 40-character SHAs, explicitly restrict `permissions`, configure job-level `timeout-minutes: 15`, and disable persisted credentials (`persist-credentials: false`) during checkout steps.
