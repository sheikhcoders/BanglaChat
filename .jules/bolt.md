## 2026-08-23 - Zero-Cost Inline Step Guards vs. Blocking Pre-Check Jobs in CI

**Learning:** Creating a separate `check_manifest` upstream job with `needs: check_manifest` introduces mandatory sequential job scheduling overhead (~10–20 seconds) for every CI run. In contrast, using an inline step guard (`if: steps.check_files.outputs.has_package_json == 'true'`) directly inside matrix build jobs executes in <0.1s after `checkout`. This avoids adding latency to standard commits while gracefully skipping steps in uninitialized repository states.

**Action:** Prefer zero-overhead inline step guards over separate upstream pre-check jobs when handling optional workspace file dependencies in CI workflows.
