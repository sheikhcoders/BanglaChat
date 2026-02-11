## 2025-02-11 - Hardening GitHub Actions CI/CD Workflows
**Vulnerability:** Default GitHub Actions configurations often have overly permissive `GITHUB_TOKEN` settings and persist credentials on the runner, which can be exploited by malicious dependencies or compromised build steps.
**Learning:** Setting `persist-credentials: false` in `actions/checkout` and explicitly defining `permissions` are critical first steps in securing a CI/CD pipeline. Adding `timeout-minutes` also prevents resource exhaustion.
**Prevention:** Always follow the principle of least privilege for `GITHUB_TOKEN` and disable credential persistence unless explicitly required for git operations in subsequent steps.

## 2025-02-11 - CI Stability in Minimal Repositories
**Vulnerability:** CI workflows can fail in early-stage or minimal repositories if they expect manifests (like `package.json` or lockfiles) that don't exist yet, potentially blocking other security or infrastructure improvements.
**Learning:** `actions/setup-node@v4` with caching enabled requires a lockfile. If the repository is empty or missing these files, the workflow will error out.
**Prevention:** Use job-level `if` guards (e.g., `if: hashFiles('package.json') != ''`) and dynamic cache detection to ensure workflows exit gracefully when expected files are missing.
