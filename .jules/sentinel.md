## 2026-02-22 - GitHub Actions Hardening Pattern
**Vulnerability:** Default GitHub Actions configurations often have overly broad permissions and persistent credentials, which can lead to token theft or resource exhaustion if a dependency or step is compromised.
**Learning:** Hardening actions with `permissions: contents: read`, `persist-credentials: false`, and `timeout-minutes` provides essential defense-in-depth. Using a "Bootstrap-aware" detection step also prevents CI noise during early repository development.
**Prevention:** Apply least-privilege permissions and credential hardening to all new workflows by default.
