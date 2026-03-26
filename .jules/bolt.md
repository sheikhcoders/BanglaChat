## 2025-05-22 - Smart CI Pre-check Pattern
**Learning:** In uninitialized repositories or documentation-heavy PRs, CI workflows consume unnecessary runner minutes attempting to install non-existent dependencies or building unchanged code.
**Action:** Use native GitHub Actions `paths-ignore` and job-level `if: hashFiles('package.json') != ''` guards to prevent execution when it's guaranteed to be redundant or fail.
