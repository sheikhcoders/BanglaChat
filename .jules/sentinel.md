# 🛡️ Sentinel Security Journal

## 2026-05-22 - CI/CD Hardening and Security Policy Initialization
**Vulnerability:** The repository is in an uninitialized state with CI workflows that are not hardened (missing pinned SHAs, explicit permissions, and job guards).
**Learning:** CI workflows in uninitialized repositories can fail if they expect files like `package.json` to exist. Hardening these workflows early prevents supply chain attacks and improves CI resilience.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs, enforce minimal permissions, and add job-level guards for uninitialized states.

### Plan
1. Harden `node.js.yml` and `nextjs.yml` by pinning actions to SHAs, adding permissions, and adding `if` guards.
2. Add `SECURITY.md` to establish a vulnerability reporting process.
3. Verify all changes and ensure the repository remains stable.
