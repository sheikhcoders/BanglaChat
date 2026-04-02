# Sentinel's Security Journal

## 2025-05-15 - GitHub Actions Hardening
**Vulnerability:** Use of mutable tags (e.g., `@v4`) in GitHub Actions workflows makes the CI/CD pipeline susceptible to supply chain attacks if the tag is pointed to a malicious commit.
**Learning:** Pinning actions to a full-length commit SHA is the only way to ensure the exact code intended is executed, providing protection against tag spoofing or hijacking.
**Prevention:** Always use full-length commit SHAs for third-party actions and include explicit job-level permissions to follow the principle of least privilege.

## 2025-05-15 - CI Stability and Bootstrap Guards
**Vulnerability:** CI pipelines that fail on missing dependencies or manifests (e.g., in uninitialized repository states) can be exploited to block development or cause availability issues for critical documentation-only updates.
**Learning:** Hardening measures (like SHA pinning) must be balanced with "Bootstrap Guards" that allow CI to pass gracefully when no functional code is present. Insecure or brittle CI detection logic (like mandatory lockfile caching or API calls to unconfigured services like GitHub Pages) can cause denial-of-service for repository updates.
**Prevention:** Use conditional steps (`if: hashFiles('...') != ''`) and robust fallback logic for package managers and artifacts to ensure CI availability across all repository lifecycle stages. Specifically, guard environment-dependent actions like `actions/configure-pages` if the repository isn't ready.
