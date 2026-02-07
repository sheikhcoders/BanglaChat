# Sentinel Security Journal

This journal documents critical security learnings and vulnerability patterns found in the BanglaChat codebase.

## 2025-02-07 - CI Workflow Hardening

**Vulnerability:** Workflows were running with default permissions and without timeouts or credential persistence controls.
**Learning:** Default GitHub Actions configurations often prioritize ease of use over the Principle of Least Privilege, potentially exposing the GITHUB_TOKEN or allowing runaway processes.
**Prevention:** Always explicitly define `permissions`, set `persist-credentials: false` in checkout steps, and implement `timeout-minutes` for all jobs.
