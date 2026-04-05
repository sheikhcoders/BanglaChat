## 2026-04-05 - GitHub Actions Supply Chain Hardening
**Vulnerability:** GitHub Actions were using mutable version tags (e.g., `@v4`), which are susceptible to tag-shaving or supply-chain attacks where a tag is moved to a malicious commit.
**Learning:** Standard workflow templates often use tags for convenience, but high-security environments require pinning to immutable commit SHAs.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs and include a comment with the version tag for readability. Additionally, enforce the principle of least privilege by explicitly defining `permissions` at the job or workflow level.

## 2026-04-05 - CI Resilience in Uninitialized Repositories
**Vulnerability:** Standard CI workflows often fail in early-stage or uninitialized repositories when expected manifest files (like `package.json` or lockfiles) are missing, leading to broken build signals.
**Learning:** In this environment, `actions/setup-node` with `cache: 'npm'` fails if `package-lock.json` is not present.
**Prevention:** Use conditional caching (e.g., `cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}`) and guard build steps with `if: hashFiles('package.json') != ''` to ensure CI remains green even before the project is fully scaffolded.
