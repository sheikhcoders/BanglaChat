# Bolt's Performance Journal

## 2026-05-03 - CI compute efficiency optimizations
**Learning:** In uninitialized repositories (no `package.json`), running full CI workflows for documentation-only changes is a significant waste of compute resources. Adding `paths-ignore` and job guards can eliminate these redundant runs.
**Action:** Always implement `paths-ignore` for documentation/journals and use `hashFiles('package.json') != ''` guards in early-stage repositories to optimize CI compute.

### Estimated Impact:
- **Compute Savings:** ~7 minutes of CI runner time saved per push/PR in the current uninitialized state.
- **Redundancy Reduction:** `cancel-in-progress: true` eliminates redundant builds on rapid successive updates, further reducing queue wait times and resource consumption.
- **Developer Experience:** Faster feedback loops by avoiding noise from failing CI runs on documentation-only changes.
