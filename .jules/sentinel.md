## 2026-06-02 - CI/CD Supply Chain Hardening
**Vulnerability:** Supply chain attacks via mutable GitHub Action tags and overly permissive GITHUB_TOKEN.
**Learning:** Pinning actions to immutable commit SHAs prevents untrusted code execution from tag hijacking. Additionally, job-level `if` guards that depend on file existence (like `hashFiles`) fail because the runner workspace is empty until `actions/checkout` runs.
**Prevention:** Always pin actions to full commit SHAs, enforce `contents: read` permissions, and place file-dependent guards at the step level after the checkout step.
