## 2025-05-15 - Hardened CI Workflows
**Vulnerability:** Supply chain attacks via mutable GitHub Action tags and CI failures in uninitialized repositories.
**Learning:** Pinning actions to mutable tags like `@v4` is risky. CI workflows can fail when expected files like `package-lock.json` are missing during the initialization phase of a repository.
**Prevention:** Pin all GitHub Actions to immutable commit SHAs. Use the 'Bootstrap Guard' pattern: make `cache` for `actions/setup-node` conditional (`hashFiles('package-lock.json') != ''`) and guard steps with `if: hashFiles('package.json') != ''`. Implement fallbacks for artifact uploading in Next.js workflows.
