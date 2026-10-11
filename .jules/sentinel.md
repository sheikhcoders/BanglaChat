# Sentinel Journal - Critical Security Learnings

## 2026-10-11 - Workflow Hardening & Least Privilege Execution

**Vulnerability:** Unrestricted workflow default permissions and unpinned action tags in CI/CD workflows expose pipelines to supply chain contamination and token leakage.
**Learning:** Third-party GitHub Actions referenced by floating version tags can be modified upstream or compromised. Default workflow permissions grant excessive privileges unless explicitly scoped to `contents: read`.
**Prevention:** Always pin third-party actions to full 40-character commit SHAs, disable credential persistence, restrict GITHUB_TOKEN permissions to least privilege, set job execution timeouts (`timeout-minutes: 15`), and guard CI execution with file existence checks.
