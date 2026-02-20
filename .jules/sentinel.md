## 2026-02-20 - GitHub Actions Hardening
**Vulnerability:** Permissive default GitHub Actions permissions and credential persistence.
**Learning:** Default CI/CD configurations often grant more permissions than necessary (e.g., `contents: write`) and persist credentials in the runner workspace, which can be exploited by malicious dependencies or PR injections.
**Prevention:** Always enforce the principle of least privilege using `permissions: contents: read`, set `persist-credentials: false` in `actions/checkout`, and implement job timeouts to mitigate resource exhaustion and exploitation windows.
