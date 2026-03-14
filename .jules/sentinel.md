## 2025-05-14 - CI/CD Hardening & Bootstrap Guard

**Vulnerability:** Supply chain attacks through mutable action tags and CI failures in uninitialized repositories.
**Learning:** Using mutable tags (e.g., `@v4`) exposes the project to breaking changes or compromised actions. Additionally, default CI templates often fail in new projects without lockfiles, creating a friction point that might lead to disabling CI.
**Prevention:** Pin actions to immutable commit SHAs. Implement the "Bootstrap Guard" pattern using `hashFiles` to make installation, build, and test steps conditional on the existence of project manifests (`package.json`, `package-lock.json`).
