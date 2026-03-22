## 2025-03-22 - CI Efficiency via Native Expressions
**Learning:** Separate 'pre-check' jobs in CI introduce significant latency regressions due to runner provisioning and checkout overhead. For simple file-presence checks in uninitialized or volatile repositories, native job-level `if: hashFiles(...)` conditions provide superior performance and resource efficiency.
**Action:** Always favor native GHA expressions over separate jobs or script-based exit codes for early-exit logic in workflows.
