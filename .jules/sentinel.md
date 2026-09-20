# Sentinel's Journal - Critical Security Learnings

## 2025-12-11 - CI/CD Supply Chain & Permission Hardening
**Vulnerability:** Default GitHub Actions permissions can grant write tokens (`GITHUB_TOKEN`) to PRs or builds, and unpinned actions can introduce supply chain vulnerabilities or unexpected breaking changes if modified upstream. Furthermore, unconditioned execution steps on missing repository dependencies can cause unwanted failure cascades or resource leakage.
**Learning:** Hardening CI/CD requires applying principle of least privilege at top-level workflow scope (`permissions: contents: read`), enforcing strict job execution timeouts (`timeout-minutes: 15`), disabling credential persistence (`persist-credentials: false`), pinning dependencies to full 40-character commit SHAs, and guarding build steps against uninitialized repository states.
**Prevention:** Always explicitly define `permissions`, commit SHAs for actions, and execution guards in all workflow configurations.
