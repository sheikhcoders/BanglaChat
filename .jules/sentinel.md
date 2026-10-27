# Sentinel Security Journal

## 2026-10-28 - GitHub Actions Workflow Hardening and Least Privilege
**Vulnerability:** CI workflows were running without explicit top-level read-only permissions, with default credential persistence enabled on `actions/checkout@v4`, and without execution timeouts.
**Learning:** Default permissions on GitHub Actions jobs or checkout steps can inadvertently expose `GITHUB_TOKEN` credentials with write/admin privileges to compromise in untrusted PR contexts or malicious dependencies. Additionally, missing `package.json` step guards in uninitialized repository states cause CI build step failures when running npm/yarn actions.
**Prevention:** Always enforce explicit top-level `permissions: contents: read`, set `persist-credentials: false` on `actions/checkout`, define job-level `timeout-minutes`, and add file exist checks (`package.json`) before executing package manager commands.
