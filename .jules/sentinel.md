# Sentinel's Journal 🛡️

## 2026-07-05 - CI Workflow Hardening
**Vulnerability:** Use of mutable tags for GitHub Actions and lack of explicit permissions/timeouts in CI workflows.
**Learning:** In uninitialized repositories, the primary security surface is the CI infrastructure. Mutable tags can be hijacked, and lack of timeouts can lead to resource exhaustion.
**Prevention:** Always pin actions to immutable commit SHAs, enforce least privilege with explicit `permissions`, and set `timeout-minutes` to prevent hanging jobs.
