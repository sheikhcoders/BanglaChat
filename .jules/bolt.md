## 2026-07-30 - [CI Optimization for Uninitialized Repositories]
**Learning:** In uninitialized repositories (no `package.json` or dependencies lock files), CI/CD pipelines fail because standard setup and test/build tasks (e.g. `npm ci`) expect these files. Adding robust existence guards at the start of CI jobs prevents unnecessary failures and saves GHA runner billable minutes.
**Action:** Use conditional steps and paths-ignore filters to skip workflows or build steps early when the repository is in an uninitialized state or when only documentation is updated.
