# Sentinel Journal - Critical Security Learnings

## 2026-09-19 - GitHub Actions CI Workflow Hardening & Action Pinning
**Vulnerability:** Unpinned third-party GitHub Actions and implicit write permissions in CI workflows can expose the repository to supply chain attacks or accidental token misuse.
**Learning:** Pinning actions to 40-character commit SHAs, enforcing `permissions: contents: read`, setting `persist-credentials: false`, and imposing job execution timeouts (`timeout-minutes: 15`) prevent authorization scope creep and malicious tag mutation.
**Prevention:** Always pin third-party actions to full commit SHAs, restrict GITHUB_TOKEN scope explicitly, and add step guards for uninitialized repository states.
