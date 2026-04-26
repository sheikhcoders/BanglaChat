# Sentinel Security Journal 🛡️

## 2026-04-25 - GitHub Actions Permission Shadowing & Default Over-privilege
**Vulnerability:** GitHub Actions workflows without explicit `permissions` blocks may default to overly permissive tokens (e.g., `contents: write`). Additionally, defining permissions at the job level shadows global permissions, potentially leading to accidental loss of required access or unintended privilege escalation if not handled carefully.
**Learning:** In uninitialized or minimally configured repositories, CI workflows are often added from templates that lack granular security controls, creating a "low-hanging fruit" for supply-chain attacks.
**Prevention:** Always define minimal top-level `permissions` (e.g., `contents: read`) and override at the job level only when strictly necessary. Use full SHAs for third-party actions to prevent tag-shifting attacks.
