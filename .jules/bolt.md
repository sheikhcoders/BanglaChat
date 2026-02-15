## 2025-05-15 - [Job-level if guards vs hashFiles]
**Learning:** Job-level `if: hashFiles(...)` guards in GitHub Actions are evaluated before the `actions/checkout` step. Since the runner's workspace is empty at that stage, `hashFiles` always returns an empty string, causing the job to be skipped even if the file exists in the repository.
**Action:** Use `paths` or `paths-ignore` in the `on` trigger for repository-wide file checks, or move the logic into steps if runner initialization cost is acceptable.
