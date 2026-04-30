## 2026-04-30 - CI/CD Security Hardening
**Vulnerability:** Over-permissive GITHUB_TOKEN and lack of resource limits in CI/CD.
**Learning:** Default CI workflows often lack explicit permissions and timeouts, increasing the blast radius of a compromise and risk of resource exhaustion.
**Prevention:** Always use explicit 'permissions: contents: read', set 'persist-credentials: false' in checkout, and define 'timeout-minutes' for all jobs. Pinning actions to full-length commit SHAs provides cryptographic certainty of the code being executed.
