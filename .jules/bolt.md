## 2026-02-07 - CI Caching Logic for Uninitialized Projects
**Learning:** `actions/setup-node@v4` will fail the entire job if the `cache` input is set but the corresponding lockfile (e.g., `pnpm-lock.yaml`) is missing. This is a common performance bottleneck in early-stage repositories where a `package.json` exists but a lockfile has not yet been committed.
**Action:** Use a dynamic detection step to set the `cache` output only when the lockfile is present, and guard CI jobs with `if: hashFiles('package.json') != ''` to prevent unnecessary runs in empty repositories.
