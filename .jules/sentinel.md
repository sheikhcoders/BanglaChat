## 2026-05-13 - Broken Logic in Job-Level File Guards
**Vulnerability:** Not a vulnerability, but a critical CI/CD failure pattern.
**Learning:** Using `if: hashFiles('package.json') != ''` at the job level in GitHub Actions causes the job to be skipped even if the file exists. This is because job-level `if` conditions are evaluated before the `actions/checkout` step runs, meaning the runner's workspace is still empty.
**Prevention:** Avoid job-level file existence checks for files inside the repository. If a guard is needed based on repository content, it must be implemented at the step level after `actions/checkout`, or via a previous job that outputs a result.
