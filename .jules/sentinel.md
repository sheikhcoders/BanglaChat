# Sentinel - Critical Security Learnings

## 2026-08-15 - Uninitialized Repo CI/CD Hardening & Supply Chain Pinning
**Vulnerability:** CI/CD workflows referencing floating tags (e.g. `@v4`) risk supply-chain compromises if action repositories are hijacked. Uninitialized repo states (missing `package.json`) trigger CI setup failures.
**Learning:** Pinning GitHub Actions to 40-character commit SHAs guarantees immutability. Combining SHA pinning with explicit read-only token permissions, checkout credential disabling (`persist-credentials: false`), execution timeouts, and conditional step guards (`[ -f "package.json" ]`) protects uninitialized repositories from build failures and malicious action injection.
**Prevention:** Always pin third-party GitHub Actions to 40-character SHAs and enforce explicit read-only permissions and step-level preconditions for repository assets.
