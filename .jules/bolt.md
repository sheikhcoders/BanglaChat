## 2025-02-15 - [Job-level if guards vs hashFiles]
**Learning:** Job-level `if: hashFiles(...)` guards in GitHub Actions are evaluated before the `actions/checkout` step. Since the runner's workspace is empty at that stage, `hashFiles` always returns an empty string, causing the job to be skipped even if the file exists in the repository.
**Action:** Use `if: hashFiles(...)` at the step level (after checkout) to handle conditional execution based on repository files, or use trigger `paths` in the `on` block to filter workflow execution.
