## 2026-06-12 - CI/CD Resource Efficiency
**Learning:** In sparse or uninitialized repositories, CI/CD workflows often fail or run unnecessarily, wasting compute resources. Implementing job-level `if` guards (e.g., `hashFiles('package.json') != ''`) and `paths-ignore` for documentation ensures that resources are only consumed when there is actionable code to build or test.
**Action:** Always implement trigger filters and environmental guards in CI/CD pipelines to optimize feedback cycles and minimize environmental overhead.
