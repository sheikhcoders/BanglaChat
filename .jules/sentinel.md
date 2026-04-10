## 2026-04-10 - CI Workflow Hardening in Uninitialized Repositories

**Vulnerability:** GitHub Actions using mutable tags (e.g., `@v4`) are susceptible to supply-chain attacks if the tag is maliciously moved or the action account is compromised. Additionally, workflows without explicit permissions may default to overly permissive tokens.

**Learning:** Hardening CI workflows (SHA pinning, minimal permissions) must be done carefully in uninitialized repositories. For example, `actions/setup-node` will fail if `cache: 'npm'` is set but no `package-lock.json` or `npm-shrinkwrap.json` exists. Similarly, `npm ci` will fail without a lockfile.

**Prevention:**
1. Pin all GitHub Actions to full-length commit SHAs.
2. Use job-level `permissions: contents: read` as a baseline.
3. Use conditional logic for caching: `cache: ${{ (hashFiles('package-lock.json') != '' || hashFiles('npm-shrinkwrap.json') != '') && 'npm' || '' }}`.
4. Guard `npm ci` and other package-related commands with `hashFiles` checks to ensure stability during the initial bootstrap phase.
