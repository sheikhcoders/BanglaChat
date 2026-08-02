## 2026-07-30 - [CI Optimization for Uninitialized Repositories]
**Learning:** In uninitialized repositories (no `package.json` or dependencies lock files), CI/CD pipelines fail because standard setup and test/build tasks (e.g. `npm ci`) expect these files. Adding robust existence guards at the start of CI jobs prevents unnecessary failures and saves GHA runner billable minutes.
**Action:** Use conditional steps and paths-ignore filters to skip workflows or build steps early when the repository is in an uninitialized state or when only documentation is updated.

## 2026-08-01 - [CI Concurrency Controls & Paths Filtering]
**Learning:** Superceded commits on the same branch consume runner minutes and create bottlenecks. Implementing path filtering (`paths-ignore`) for markdown/docs updates and concurrency controls (`cancel-in-progress: true`) dramatically improves developer feedback loops and minimizes wasted resource consumption.
**Action:** Always include strict concurrency group configurations and documentation ignore-paths on new CI/CD workflow files to conserve execution minutes.
