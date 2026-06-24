## 2026-06-24 - CI/CD Hardening in Uninitialized Repositories
**Vulnerability:** Supply chain risk via mutable tags and potential token leakage through overly permissive global permissions.
**Learning:** In uninitialized repositories (missing `package.json`), standard CI workflows fail immediately. This can be mitigated with job-level `hashFiles` guards.
**Prevention:** Always pin actions to verified SHAs, enforce global `contents: read` permissions, and use job-level gates to prevent compute waste in sparse states.
