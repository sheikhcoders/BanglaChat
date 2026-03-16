## 2025-05-14 - CI/CD Supply Chain Hardening via Action Pinning
**Vulnerability:** Use of mutable tags (e.g., @v4) in GitHub Actions allows for potential supply chain attacks if an upstream tag is maliciously or accidentally moved to a compromised commit.
**Learning:** Hardening CI/CD pipelines requires moving from convenience-based versioning (tags) to security-based versioning (immutable SHAs).
**Prevention:** Always pin GitHub Actions to their full immutable commit SHAs and include a comment with the human-readable version for maintainability.
