# Bolt's Performance Journal

## 2025-12-11 - Smart Pre-check Job for CI efficiency
**Learning:** In uninitialized or early-stage repositories, CI workflows often waste resources running full matrices for non-existent code. A 'Smart Pre-check Job' can evaluate the repository state and skip expensive matrix builds while still failing explicitly if the state is broken (e.g., source code exists without a manifest).
**Action:** Implement a lightweight pre-check job that sets a `should-run` output, and use it as a conditional for subsequent resource-intensive jobs.

## 2025-12-11 - Latency Regressions from Sequential CI Jobs
**Learning:** Introducing separate "pre-check" jobs to optimize CI efficiency adds 20-30s of mandatory latency (runner provisioning, checkout) to every run. For simple existence checks like `package.json`, using native GHA job-level expressions (`if: hashFiles(...)`) is superior as it's evaluated by the service without provisioning a runner.
**Action:** Prefer native GHA expressions over separate jobs for simple file-presence checks to minimize CI feedback latency.
