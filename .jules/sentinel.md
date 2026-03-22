## 2025-05-14 - GitHub Actions Hardening
**Vulnerability:** Use of mutable version tags (e.g., @v4) in GitHub Actions and overly permissive default GITHUB_TOKEN permissions.
**Learning:** Default configurations often prioritize convenience over security, allowing for potential supply chain attacks if a tag is moved or a repository is compromised. Explicitly defining minimal permissions and pinning to immutable SHAs significantly reduces the attack surface.
**Prevention:** Always pin GitHub Actions to immutable commit SHAs and define top-level, least-privilege permissions for all workflows.
