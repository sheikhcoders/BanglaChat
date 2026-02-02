## 2025-05-14 - Job-level hashFiles() check
**Learning:** Adding a job-level `if: hashFiles('package.json') != ''` condition fails because it is evaluated before the `actions/checkout` step. Since the workspace is empty at that point, the condition always evaluates to false, causing the job to be skipped even if the file exists in the repository.
**Action:** Avoid using `hashFiles()` at the job level for skipping jobs based on repository content unless a preceding job has already performed the check and passed the result via outputs.
