# Sentinel's Security Journal

## 2026-09-10 - Harden CI/CD Workflows & Establish Security Policy
**Vulnerability:** Default elevated workflow permissions, unpinned third-party actions, missing job execution timeouts, persistent GitHub credentials, and setup failures on uninitialized repositories.
**Learning:** Default workflow configurations in GitHub Actions can expose GITHUB_TOKEN write access and run indefinitely if steps hang. Furthermore, setup-node cache option fails if package.json does not exist.
**Prevention:** Always set explicit top-level `permissions: contents: read`, set `timeout-minutes: 15`, use `persist-credentials: false`, pin third-party actions to full 40-character commit SHAs, and guard dependency steps with inline package.json existence checks.
