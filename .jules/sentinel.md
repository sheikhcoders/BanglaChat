## 2025-05-15 - GitHub Actions Workflow Hardening
**Vulnerability:** Overly permissive GITHUB_TOKEN and potential token exfiltration from persisted credentials.
**Learning:** Default GitHub Actions configurations often lack explicit permission blocks and persist git credentials on the runner, which increases the attack surface in case of a compromised build step.
**Prevention:** Always add explicit `permissions: contents: read` (least privilege), set `persist-credentials: false` in `actions/checkout`, and include `timeout-minutes` to prevent resource exhaustion.
