## 2026-05-05 - CI Compute Optimization in Uninitialized States
**Learning:** Standard GitHub Actions templates often lack path filtering and concurrency controls, leading to redundant compute usage. In uninitialized repositories (no `package.json`), these workflows can fail repeatedly and waste resources on every documentation update or concurrent push.
**Action:** Always implement `paths-ignore` for documentation/journals and job-level `if: hashFiles('package.json') != ''` guards in bootstrap environments to ensure CI only runs when actionable code is present.
