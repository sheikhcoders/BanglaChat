## 2026-05-31 - Balancing CI Tool Mandates with Robustness
**Learning:** Forcing a specific package manager (like `pnpm`) in CI workflows for an uninitialized repository requires careful handling of lockfile flags (e.g., avoiding `--frozen-lockfile`) and flexible detection logic to prevent breaking the build before the project is fully set up.
**Action:** When migrating CI to new tools in an uninitialized state, use permissive install commands and ensure detection logic provides sensible fallbacks that align with project mandates while respecting existing (or missing) lockfiles.
