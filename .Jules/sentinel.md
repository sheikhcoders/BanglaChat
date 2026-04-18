# Sentinel's Security Journal

## 2026-04-18 - GitHub Actions Hardening in Uninitialized Repositories
**Vulnerability:** Default GitHub Actions permissions and use of mutable tags (e.g., `@v4`) create a risk of supply chain attacks and unauthorized repository modifications.
**Learning:** In the early stages of a repository ("bootstrap phase"), many standard security tools and workflows fail because essential files like `package.json` are missing. CI workflows must be resilient to these missing files while still maintaining a strong security posture.
**Prevention:**
1. Pin all GitHub Actions to full-length commit SHAs.
2. Set explicit, minimal top-level permissions (`permissions: contents: read`) in every workflow file.
3. Use conditional logic (e.g., `hashFiles('package.json') != ''`) to guard steps that depend on the existence of specific files, ensuring CI passes even in an uninitialized state.
4. Implement `paths-ignore` for non-code files (documentation, journals) to save compute and reduce attack surface on CI.
