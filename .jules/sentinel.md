# Sentinel's Journal - Critical Security Learnings

## 2026-09-26 - Hardening Node.js CI Workflow Security

**Vulnerability:**
Default GitHub Actions workflows run without top-level permission restrictions, allow infinite job runtimes, persist git credentials in checkout steps, use unpinned action references, and fail when running in bare repositories without a `package.json`.

**Learning:**
Actions workflows in uninitialized or minimal repositories need explicit existence check step guards for `package.json` to prevent build failures, alongside pinned SHAs and strict read-only permissions (`contents: read`).

**Prevention:**
Always restrict job permissions to read-only (`contents: read`), set job execution `timeout-minutes`, disable credential persistence (`persist-credentials: false`), pin actions to full 40-character commit SHAs, and add file existence guards before running `npm` commands in GitHub Actions workflows.
