# Sentinel Security Journal

This journal records critical security learnings and prevention strategies for the BanglaChat project.

## 2026-02-14 - CI Failure due to missing lockfile in empty repository
**Vulnerability:** Not a direct security vulnerability, but a CI failure that blocks security updates.
**Learning:** `actions/setup-node@v4` with `cache: 'npm'` (or other package managers) fails if no lockfile is found. In a newly initialized or mostly empty repository, this triggers a failure.
**Prevention:** Use job-level `if: hashFiles('package.json') != ''` guards to prevent CI jobs from running when the necessary manifest/lock files are missing.
