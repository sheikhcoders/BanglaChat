## 2026-06-12 - Hardening CI/CD Supply Chain and Permissions
**Vulnerability:** Use of mutable tags (e.g., @v4) for GitHub Actions and overly permissive default GITHUB_TOKEN scopes.
**Learning:** Actions pinned to tags are susceptible to supply chain attacks if a tag is maliciously moved. Additionally, job-level `permissions` replace global ones rather than merging; if a `deploy` job defines its own permissions, it must explicitly include all required scopes (e.g., `contents: read`) to maintain functionality after hardening global permissions.
**Prevention:** Always pin actions to verified commit SHAs and enforce the principle of least privilege using granular job-level permissions.
