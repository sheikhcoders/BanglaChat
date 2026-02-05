## 2026-02-05 - GitHub Actions Permission Inheritance
**Vulnerability:** Risk of functional regression when hardening GitHub Actions permissions.
**Learning:** Top-level `permissions` blocks in GitHub Actions are completely overridden by job-level `permissions` blocks. If a job-level block is added to grant specific permissions (like `pages: write`), it must also explicitly include any permissions defined at the top level that the job still needs (like `contents: read`).
**Prevention:** When using job-level `permissions` blocks, ensure all required permissions are explicitly listed, as they do not inherit from the top-level configuration.
