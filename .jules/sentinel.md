## 2026-08-22 - Next.js Deployment Workflow Supply Chain & Token Hardening

**Vulnerability:** Next.js deployment workflow (`nextjs.yml`) using unpinned third-party actions (`@v4`), missing top-level read-only permissions, omitting job execution timeouts, and leaving checkout persistent credentials enabled, exposing CI runners to potential supply-chain compromises or credential leakage.
**Learning:** Deployment workflows requiring write permissions on specific jobs (e.g. `pages: write`, `id-token: write`) still need global least-privilege defaults (`permissions: contents: read`) and `persist-credentials: false` to prevent rogue steps or compromised actions from exfiltrating git credentials or abusing elevated permissions across unneeded scopes.
**Prevention:** Always pin third-party actions to full 40-character commit SHAs, set strict `timeout-minutes` on all jobs, specify top-level `permissions: contents: read`, and explicitly set `persist-credentials: false` on `actions/checkout`.
