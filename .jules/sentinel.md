# Sentinel Security Journal

## 2025-02-18 - GitHub Actions Workflow Hardening
**Vulnerability:** Default GitHub Actions configurations often lack explicit permissions, timeouts, and credential protection, leading to overly permissive environments and potential resource exhaustion.
**Learning:** In early-stage repositories, CI workflows are often the only attack surface. Hardening them early establishes a secure foundation. Implementing graceful skips for missing manifests prevents CI noise and potential leakage in failure logs.
**Prevention:** Always set top-level `permissions: contents: read`, use `persist-credentials: false` in `actions/checkout`, and enforce `timeout-minutes` on all jobs. Use conditional guards to ensure jobs only run when their prerequisites (like package manifests) are present.
