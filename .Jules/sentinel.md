## 2026-04-24 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable tags (like `@v4`) in GitHub Actions and overly permissive default permissions.
**Learning:** Mutable tags can be hijacked or updated with breaking/malicious changes. Default permissions may allow actions to write to the repository unnecessarily.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs and explicitly define minimal required permissions (e.g., `contents: read`). Add job-level timeouts to prevent hung processes from consuming resources.

## 2026-04-24 - CI Failures in Uninitialized Repositories
**Vulnerability:** Hardcoded caching and build steps in CI can fail if expected files (like `package-lock.json` or `package.json`) are missing.
**Learning:** Hardening CI with `cache: npm` in `actions/setup-node` causes a fatal error if the lockfile is absent. This is common in the early stages of a project or when documentation-only changes are made before the project is initialized.
**Prevention:** Use conditional logic for caching (e.g., `${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}`) and guard build/test steps with file existence checks (`if: hashFiles('package.json') != ''`) to ensure CI remains resilient and non-blocking in uninitialized states.
