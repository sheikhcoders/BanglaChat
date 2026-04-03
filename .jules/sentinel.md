## 2025-04-03 - [Workflow Hardening]
**Vulnerability:** Use of major version tags for GitHub Actions and lack of explicit permissions/timeouts in CI/CD workflows.
**Learning:** Initial project scaffolding often defaults to major version tags (e.g., `v4`), which can be updated to point to malicious code. Explicit permissions and timeouts are critical to preventing lateral movement and resource exhaustion in compromised environments.
**Prevention:** Always pin actions to full-length commit SHAs and define job-level permissions and timeouts.
