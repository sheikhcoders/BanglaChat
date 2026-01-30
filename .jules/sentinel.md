## 2026-01-30 - Hardening GitHub Actions and Improving CI Stability
**Vulnerability:** Supply chain attacks via mutable GitHub Action tags and overly permissive default GITHUB_TOKEN permissions.
**Learning:** Using version tags like `@v4` is convenient but risky as tags can be moved to point to malicious code. Additionally, not specifying permissions in a job allows it to inherit default broad permissions. In repositories that are templates or starting empty, boilerplate workflows can cause CI failures due to missing files (like `package.json`).
**Prevention:**
1. Pin GitHub Actions to full-length commit SHAs.
2. Explicitly define minimum required `permissions` at the job level.
3. Use job-level conditions like `if: hashFiles('package.json') != ''` to prevent unnecessary CI failures in empty repositories.
