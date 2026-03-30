## 2025-03-30 - SHA Pinning and Workflow Hardening
**Vulnerability:** Use of mutable version tags (e.g., `@v4`) in GitHub Actions workflows creates a supply chain risk where the action's source can be modified without notice. Lack of explicit job-level permissions and timeouts further increases the attack surface and risk of resource exhaustion.
**Learning:** Hardening GitHub Actions using immutable commit SHAs, explicit permissions, and job timeouts is a high-impact, low-complexity security enhancement for repository infrastructure.
**Prevention:** Always pin GitHub Actions to full commit SHAs, specify the minimum necessary permissions for each job, and set `timeout-minutes` to avoid uncontrolled execution costs.

## 2025-03-30 - CI Stability in Uninitialized Repositories
**Vulnerability:** Workflows failing in early repository states due to missing manifests (`package.json`, `package-lock.json`) causing dependency installation or caching steps to exit with errors.
**Learning:** "Bootstrap Guards" (conditional steps and fallback directories) are essential for maintaining CI stability during the initial setup of a project or during documentation-only updates.
**Prevention:** Use `hashFiles('package.json') != ''` to guard dependency steps and provide fallback paths for artifact uploading to ensure workflows remain green even when the application is not yet buildable.
