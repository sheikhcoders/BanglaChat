## 2026-03-31 - Hardening CI/CD and Supply Chain Security
**Vulnerability:** Default GitHub Actions workflows used mutable tags and lacked explicit permissions, posing a risk of supply chain attacks and overly permissive execution environments.
**Learning:** Hardening measures (like SHA pinning and permissions) must be applied without breaking existing ecosystem compatibility (e.g., maintaining `npm` defaults unless a migration is intentional).
**Prevention:** Always pin core GitHub Actions to immutable commit SHAs, enforce least privilege with explicit job-level permissions, and implement 'Bootstrap Guards' to handle uninitialized states safely while respecting the project's chosen tooling.
