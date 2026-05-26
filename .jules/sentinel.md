## 2026-05-26 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable tags for GitHub Actions and overly permissive default GITHUB_TOKEN.
**Learning:** Using tags like `@v4` for actions exposes the pipeline to supply chain attacks if the tag is moved to a malicious commit. Default permissions may allow actions to write to the repository.
**Prevention:** Pin all actions to full-length commit SHAs and explicitly set `permissions: contents: read` at the top level of workflows.
