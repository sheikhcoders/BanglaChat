## 2026-07-01 - CI Hardening for Uninitialized Repositories
**Vulnerability:** CI workflows in uninitialized repositories are often overly permissive and lack resource constraints, making them susceptible to supply chain attacks and resource exhaustion.
**Learning:** Hardening CI infrastructure (pinning SHAs, least privilege, timeouts) is the primary security task when application code is absent.
**Prevention:** Always pin actions to immutable SHAs, enforce global 'permissions: contents: read', and add job timeouts to prevent resource exhaustion.
