## 2025-02-11 - Hardening GitHub Actions CI/CD Workflows
**Vulnerability:** Default GitHub Actions configurations often have overly permissive `GITHUB_TOKEN` settings and persist credentials on the runner, which can be exploited by malicious dependencies or compromised build steps.
**Learning:** Setting `persist-credentials: false` in `actions/checkout` and explicitly defining `permissions` are critical first steps in securing a CI/CD pipeline. Adding `timeout-minutes` also prevents resource exhaustion.
**Prevention:** Always follow the principle of least privilege for `GITHUB_TOKEN` and disable credential persistence unless explicitly required for git operations in subsequent steps.
