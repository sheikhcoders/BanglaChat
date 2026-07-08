## 2026-07-07 - CI/CD Workflow Hardening
**Vulnerability:** GitHub Actions workflows were using mutable tags (e.g., @v4) and lacked explicit least-privilege permissions and job-level timeouts.
**Learning:** Default workflow templates often prioritize ease of use over security, leading to potential supply chain risks if a tag is hijacked or resource exhaustion if a job hangs.
**Prevention:** Always pin actions to immutable commit SHAs, enforce permissions: contents: read at the top level or job level, and set reasonable timeout-minutes for all jobs.
