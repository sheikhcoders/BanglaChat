## 2025-02-04 - GitHub Actions Hardening Pattern
**Vulnerability:** Potential exfiltration of GITHUB_TOKEN and overly permissive job permissions in CI/CD workflows.
**Learning:** Default GitHub Actions configurations often leave `persist-credentials: true` and have broad default permissions. This allows the git token to be stored on the runner's disk and potentially accessed by malicious dependencies.
**Prevention:** Always set `persist-credentials: false` in `actions/checkout` and explicitly define minimal `permissions` (e.g., `contents: read`) at the job level.
