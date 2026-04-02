# Sentinel's Security Journal

## 2025-05-15 - GitHub Actions Hardening
**Vulnerability:** Use of mutable tags (e.g., `@v4`) in GitHub Actions workflows makes the CI/CD pipeline susceptible to supply chain attacks if the tag is pointed to a malicious commit.
**Learning:** Pinning actions to a full-length commit SHA is the only way to ensure the exact code intended is executed, providing protection against tag spoofing or hijacking.
**Prevention:** Always use full-length commit SHAs for third-party actions and include explicit job-level permissions to follow the principle of least privilege.
