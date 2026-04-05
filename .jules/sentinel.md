## 2026-04-05 - GitHub Actions Supply Chain Hardening
**Vulnerability:** GitHub Actions were using mutable version tags (e.g., `@v4`), which are susceptible to tag-shaving or supply-chain attacks where a tag is moved to a malicious commit.
**Learning:** Standard workflow templates often use tags for convenience, but high-security environments require pinning to immutable commit SHAs.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs and include a comment with the version tag for readability. Additionally, enforce the principle of least privilege by explicitly defining `permissions` at the job or workflow level.
