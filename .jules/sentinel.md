# Sentinel's Journal 🛡️

## 2025-03-12 - CI Failures in Uninitialized Repositories

**Vulnerability:** CI workflows (Node.js/Next.js) fail with exit code 1 or 254 when `package.json` or lockfiles are missing in a newly initialized repository.
**Learning:** Standard GitHub Action templates assume a project is already initialized. In a multi-agent environment where the first task might be documentation or metadata, these "loud" failures block progress.
**Prevention:** Implement "Bootstrap Guards" using GitHub Actions `if: hashFiles('package-lock.json') != ''` and conditional outputs to allow CI to pass gracefully until the repository is fully bootstrapped.
