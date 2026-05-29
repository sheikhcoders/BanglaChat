# Bolt's Journal - Performance Optimizations

## 2026-05-28 - CI Compute Optimization for Uninitialized Repository
**Learning:** CI workflows in uninitialized repositories (missing `package.json`) fail unnecessarily on documentation-only changes, wasting compute resources. Job-level guards and `paths-ignore` are essential to prevent these redundant runs.
**Action:** Implement `paths-ignore` for documentation and job-level `hashFiles('package.json') != ''` guards to skip CI when the application is not yet initialized.
