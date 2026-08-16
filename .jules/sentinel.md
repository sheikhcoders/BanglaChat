# Sentinel Security Journal

## 2026-08-07 - GitHub Actions Supply Chain & Permission Hardening
**Vulnerability:** Default GITHUB_TOKEN permissions in GitHub Actions workflows permit write actions by default if unconfigured, increasing blast radius if a workflow or dependency is compromised. Furthermore, unpinned action tags (e.g. `@v4`) can be mutated upstream.
**Learning:** In uninitialized repositories lacking `package.json`, running `actions/setup-node` with `cache: 'npm'` fails with "Dependencies lock file is not found".
**Prevention:** Always declare top-level `permissions: contents: read`, set `timeout-minutes: 15`, set `persist-credentials: false`, pin action commits to immutable 40-character SHAs, and guard npm steps with an inline `package.json` check.
