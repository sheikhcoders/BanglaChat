# Sentinel's Journal - Critical Security Learnings

## 2026-05-09 - Repository Initialization and CI Hardening
**Vulnerability:** Unhardened CI workflows in an uninitialized repository state.
**Learning:** Default GitHub Actions templates often lack security best practices such as pinning actions to SHAs, enforcing minimal permissions, and setting timeouts.
**Prevention:** Always pin actions to verified SHAs, enforce 'contents: read' at a minimum, and implement timeouts for all jobs to prevent resource exhaustion and supply chain attacks.
