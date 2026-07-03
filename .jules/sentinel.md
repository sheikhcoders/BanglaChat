## 2026-07-03 - CI/CD Infrastructure Hardening
**Vulnerability:** Overly permissive default GITHUB_TOKEN permissions and lack of execution timeouts in CI workflows.
**Learning:** Default GitHub Actions permissions can be too broad, and missing timeouts can lead to resource exhaustion if a job hangs. In uninitialized repositories, hardening infrastructure is the primary security task.
**Prevention:** Always define explicit top-level permissions (least privilege) and set reasonable timeouts for all jobs. Pin actions to immutable SHAs to prevent supply chain attacks.
