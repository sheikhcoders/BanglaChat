## 2026-04-24 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable tags (like `@v4`) in GitHub Actions and overly permissive default permissions.
**Learning:** Mutable tags can be hijacked or updated with breaking/malicious changes. Default permissions may allow actions to write to the repository unnecessarily.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs and explicitly define minimal required permissions (e.g., `contents: read`). Add job-level timeouts to prevent hung processes from consuming resources.
