# Sentinel Security Journal

## 2026-10-15 - GitHub Actions Token Scoping and Credential Persistence
**Vulnerability:** Excessive permissions on `GITHUB_TOKEN` and persistent git credentials left workflow jobs vulnerable to credential exposure/exfiltration if build scripts or third-party dependencies are compromised.
**Learning:** Default GitHub Actions permissions grant write access across repository resources, and `actions/checkout` defaults `persist-credentials` to true, storing the auth token in git config on disk.
**Prevention:** Explicitly define top-level `permissions: contents: read` in all workflows, pass `persist-credentials: false` to `actions/checkout`, set explicit `timeout-minutes`, and use package guards for clean execution in uninitialized state.
