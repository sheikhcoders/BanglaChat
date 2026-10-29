## 2026-10-28 - CI Workflow Hardening & Token Protection
**Vulnerability:** GitHub Actions workflows defaulting to elevated write permissions, persisting git credentials post-checkout, and running without execution timeouts or package existence checks.
**Learning:** Default CI configurations in minimal/uninitialized repositories expose `GITHUB_TOKEN` credentials to potential downstream action compromise and are subject to workflow resource exhaustion.
**Prevention:** Always declare explicit top-level `permissions: contents: read`, set `persist-credentials: false` on `actions/checkout`, define job `timeout-minutes`, and guard execution steps based on package file existence.
