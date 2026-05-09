# Sentinel Journal - Critical Security Learnings

## 2026-05-09 - CI Hardening and Security Policy Baseline
**Vulnerability:** Unpinned GitHub Actions and overly permissive defaults in workflows.
**Learning:** Initializing a repository without explicit security controls in CI/CD leaves it vulnerable to supply chain attacks and accidental credential leakage.
**Prevention:** Always pin actions to full-length commit SHAs, enforce minimal permissions, and establish a `SECURITY.md` baseline early in the project lifecycle.
