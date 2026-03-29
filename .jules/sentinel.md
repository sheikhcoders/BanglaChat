# Sentinel Journal - Critical Security Learnings

## 2024-03-29 - Workflow Hardening and Supply Chain Defense
**Vulnerability:** Workflow vulnerability and supply chain insecurity in default GitHub Actions.
**Learning:** Default CI/CD workflows often lack critical security measures like SHA pinning, job-level timeouts, and explicit permissions. Pinning actions to immutable SHAs is essential for preventing supply chain attacks, while explicit permissions follow the principle of least privilege.
**Prevention:** Always harden workflows by pinning actions to immutable SHAs, enforcing strict job permissions, adding concurrency controls, and setting job-level timeouts to prevent resource exhaustion.
