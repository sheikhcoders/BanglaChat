## 2025-05-14 - CI Efficiency via Native Expressions
**Learning:** Separate 'pre-check' jobs in CI introduce significant latency regressions due to runner provisioning and checkout overhead. For simple file-presence checks, native job-level `if` conditions are superior for performance.
**Action:** Use job-level `if: hashFiles('package.json') != ''` to guard workflows in uninitialized repositories instead of dedicated pre-check jobs.
