# Bolt Critical Learnings Journal

## 2026-10-12 - CI Efficiency and Execution Safeguards in Uninitialized Repositories
**Learning:** In repositories without root JavaScript packages or application source files, default GitHub Actions workflows attempt node setup, dependency installation (`npm ci`), or build/test commands that either fail or consume unnecessary runner minutes. Adding `paths-ignore` for non-code files (`**.md`, `.jules/**`), `concurrency` cancellation, `timeout-minutes: 15`, and step-level `package.json` existence check guards eliminates wasted compute time and prevents broken workflow runs.
**Action:** Always include path filters, concurrency cancellation controls, job execution timeouts, and package existence guards when setting up or optimizing GitHub Actions workflows.
