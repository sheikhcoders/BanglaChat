## 2026-05-25 - CI/CD Supply Chain Hardening
**Vulnerability:** Potential supply chain attacks via mutable GitHub Action tags and overly permissive GITHUB_TOKEN.
**Learning:** In uninitialized repositories, CI workflows often remain in a default, unhardened state. Transitions to new tool mandates (like pnpm) must be handled resiliently alongside security hardening.
**Prevention:** Always pin actions to full-length commit SHAs, enforce 'contents: read' permissions, disable credential persistence, and use job-level guards to handle missing manifest files.
