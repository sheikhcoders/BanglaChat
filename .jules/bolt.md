## 2026-05-26 - CI Compute Optimization
**Learning:** CI workflows in uninitialized or documentation-heavy repositories often waste compute cycles by running on non-code changes or failing early due to missing configuration files. Using `paths-ignore` and job-level `if` guards significantly reduces resource consumption.
**Action:** Always implement `paths-ignore` for documentation/journals and job-level `if: hashFiles('package.json') != ''` guards in early-stage projects.
