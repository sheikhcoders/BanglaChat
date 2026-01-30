## 2026-01-30 - [Broken Caching due to Missing Permissions]
**Learning:** In GitHub Actions, the `actions/cache` step requires `actions: write` permission at the job level to save new cache entries. Without this permission, the cache is effectively read-only, which significantly degrades performance on subsequent builds as every run results in a cache miss for the save operation.
**Action:** Always ensure that jobs using `actions/cache` have `permissions: actions: write` explicitly set if the repository uses fine-grained permissions.
