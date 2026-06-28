## 2026-06-28 - Hardening CI/CD in Uninitialized Repositories
**Vulnerability:** Supply chain risks from unpinned actions and excessive `GITHUB_TOKEN` permissions; CI "broken windows" from frequent failures in early-stage (uninitialized) projects.
**Learning:** Standard GitHub Actions configurations (e.g., `setup-node` with `cache: 'npm'`) assume the presence of `package.json` and lockfiles. In uninitialized repositories, these cause immediate workflow failures, masking security improvements and discouraging CI adoption. Security hardening must be resilient to the project's initialization state.
**Prevention:**
- Pin actions to verified SHAs to prevent supply chain attacks.
- Enforce global `permissions: contents: read`.
- Implement conditional caching: `cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}`.
- Guard manifest-dependent steps with `if: hashFiles('package.json') != ''`.
- Ensure package manager detection scripts do not exit with error codes when a manifest is missing in early development phases.
