## 2026-01-31 - CI Performance Optimization in Empty Repositories
**Learning:** In repositories with no application code, standard CI jobs often run unnecessarily or fail slowly. The biggest performance win is implementing job skipping based on file existence and adding concurrency control.
**Action:** Always check if CI jobs have guard clauses and concurrency management, especially in early-stage projects.
