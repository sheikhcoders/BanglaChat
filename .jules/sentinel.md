## 2026-06-12 - [CI/CD Hardening]
**Vulnerability:** Use of mutable tags for GitHub Actions and overly permissive default GHA tokens.
**Learning:** In sparse repositories that frequently reset, CI workflows are the primary attack surface. Hardening them with SHA pinning and explicit permissions is a critical first step.
**Prevention:** Always pin actions to verified commit SHAs and enforce `permissions: contents: read` globally, overriding specific jobs only when necessary (e.g., for deployment).
