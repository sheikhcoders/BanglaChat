## 2025-03-30 - SHA Pinning and Workflow Hardening
**Vulnerability:** Use of mutable version tags (e.g., `@v4`) in GitHub Actions workflows creates a supply chain risk where the action's source can be modified without notice. Lack of explicit job-level permissions and timeouts further increases the attack surface and risk of resource exhaustion.
**Learning:** Hardening GitHub Actions using immutable commit SHAs, explicit permissions, and job timeouts is a high-impact, low-complexity security enhancement for repository infrastructure.
**Prevention:** Always pin GitHub Actions to full commit SHAs, specify the minimum necessary permissions for each job, and set `timeout-minutes` to avoid uncontrolled execution costs.
