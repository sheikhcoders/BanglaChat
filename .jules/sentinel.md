# Sentinel Security Journal

## 2026-10-18 - GitHub Actions Workflow Security Hardening
**Vulnerability:** CI workflows running with implicit write permissions, persistent checkout credentials, and no execution timeouts pose risk of token leakage/abuse and resource exhaustion.
**Learning:** Default GitHub Actions permissions and checkout settings grant excess privileges that can be exploited by compromised dependencies or malicious pull requests.
**Prevention:** Always enforce explicit least-privilege `permissions: contents: read`, set `persist-credentials: false` on `actions/checkout`, and configure `timeout-minutes` on all jobs.
