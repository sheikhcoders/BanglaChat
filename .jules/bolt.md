## 2026-02-05 - CI Caching and pnpm Setup Optimization
**Learning:** `actions/setup-node@v4` requires a lockfile to be present if the `cache` input is set, otherwise it fails during the setup phase. Additionally, for `pnpm` caching to work, `pnpm` should be enabled via `corepack` *before* the `setup-node` step so the action can resolve the store path.
**Action:** Use dynamic detection to only set the `cache` output when a lockfile is found, and ensure `corepack enable pnpm` precedes `setup-node` in the workflow.
