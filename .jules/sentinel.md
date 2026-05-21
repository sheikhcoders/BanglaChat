# Sentinel Security Journal

## 2026-05-21 - [CI Hardening]
**Vulnerability:** Default CI workflows often use broad permissions and mutable action tags, which can lead to supply chain attacks or accidental data exposure.
**Learning:** Hardening CI/CD pipelines by pinning actions to SHAs and restricting permissions is a foundational security practice.
**Prevention:** Always pin actions to full-length commit SHAs, set explicit job-level permissions, and use `persist-credentials: false` in checkout steps.

## 2026-05-21 - [Infrastructure Resilience in CI]
**Vulnerability:** Unilaterally switching package managers in CI without checking for existing lockfiles can break builds and compromise dependency integrity.
**Learning:** Security hardening must be balanced with existing project infrastructure. Mandating a specific tool (like `pnpm`) should include fallback or detection logic for other common tools (like `npm` or `yarn`) to maintain stability.
**Prevention:** Use conditional logic in CI steps to detect the appropriate package manager and use "frozen" install flags to ensure deterministic builds.
