# Sentinel Journal - Critical Learnings

## 2026-10-09 - CI Security Hardening for GitHub Actions Workflow

**Vulnerability:** Default elevated `GITHUB_TOKEN` permissions, unpinned third-party GitHub Actions, missing timeout limits, and exposed checkout credentials in `.github/workflows/node.js.yml`.
**Learning:** Default GitHub Actions configurations can allow token permission abuse or supply chain compromises through altered action tags. In addition, missing package.json existence checks in uninitialized repositories cause build failure loops.
**Prevention:** Always enforce top-level `permissions: contents: read`, set `timeout-minutes: 15`, use `persist-credentials: false` on `actions/checkout`, pin third-party actions to full 40-character commit SHAs, and guard dependency installation steps behind file existence checks.
