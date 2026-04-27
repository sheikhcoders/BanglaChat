# Sentinel's Journal

## 2026-04-27 - Supply Chain Hardening for CI Workflows
**Vulnerability:** Use of mutable GitHub Action tags (e.g., @v4) and overly permissive default permissions in CI workflows increase the risk of supply chain attacks and privilege escalation.
**Learning:** Pinning actions to immutable commit SHAs and defining granular job-level permissions significantly reduces the attack surface.
**Prevention:** Always pin actions to full-length commit SHAs and follow the principle of least privilege for GHA permissions.
