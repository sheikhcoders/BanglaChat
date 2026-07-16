# Sentinel Journal

## 2026-07-16 - GitHub Actions Workflow Hardening
**Vulnerability:** Untrusted third-party actions running with excessive permissions and susceptible to tag-shifting supply-chain risks, combined with unconstrained build environments in uninitialized states.
**Learning:** In uninitialized repositories, default pipelines often crash or run inefficiently. Hardening them with precise `if` conditions, immutable SHAs, specific permission boundaries, and timeouts prevents both malicious or accidental workflow hijack and useless CI runs.
**Prevention:** Always pin workflows to full 40-character SHA hashes, restrict permissions to the minimum necessary (`contents: read`), configure job-level `hashFiles` checks, and set strict execution timeouts.
