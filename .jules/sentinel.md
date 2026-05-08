# Sentinel Security Journal

This journal tracks critical security learnings and vulnerability patterns discovered in the BanglaChat codebase.

## 2026-05-07 - Initial Security Hardening
**Vulnerability:** Workflows were using unpinned actions and lacked explicit permissions, increasing the risk of supply chain attacks.
**Learning:** Default GitHub Actions configurations often prioritize ease of use over security; explicit hardening is required for production readiness.
**Prevention:** Always pin actions to full-length commit SHAs and follow the principle of least privilege for GITHUB_TOKEN permissions.
