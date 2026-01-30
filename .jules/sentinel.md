## 2026-01-30 - Hardening GitHub Actions with SHAs and Explicit Permissions
**Vulnerability:** Supply chain attacks via mutable GitHub Action tags and overly permissive default GITHUB_TOKEN permissions.
**Learning:** Using version tags like `@v4` is convenient but risky as tags can be moved to point to malicious code. Additionally, not specifying permissions in a job allows it to inherit default broad permissions.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs and explicitly define the minimum required `permissions` at the job level.
