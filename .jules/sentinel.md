# Sentinel Journal - Security Learnings

## 2026-08-22 - GitHub Actions Supply Chain & Workflow Hardening in Uninitialized States

**Vulnerability:** CI/CD workflows (`node.js.yml` and `nextjs.yml`) using mutable tag references (`actions/checkout@v4`), unconstrained GITHUB_TOKEN permissions, missing step timeouts, default `persist-credentials: true`, and `setup-node` lockfile lookup failures on uninitialized repos without `package.json`.
**Learning:** Default GitHub Actions configurations permit tag hijacking and token leaks across steps. Moreover, running `setup-node` with `cache: 'npm'` fails when `package.json` or `package-lock.json` is missing.
**Prevention:** Pin all third-party actions to 40-character commit SHAs, explicitly set `permissions: contents: read`, configure `timeout-minutes: 15` and `persist-credentials: false`, and guard setup/install steps with a `package.json` existence check.
