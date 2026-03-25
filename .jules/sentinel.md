## 2025-03-25 - Hardened CI/CD Workflows & SHA Pinning
**Vulnerability:** Supply chain attacks via third-party GitHub Actions and resource exhaustion in CI runs.
**Learning:** Using mutable tags (like `@v4`) for GitHub Actions exposes the build process to potential malicious updates or breaking changes if the tag is pointed to a different commit. Additionally, uninitialized repositories cause CI failures when standard commands (like `npm ci`) are run without a `package.json`.
**Prevention:** Pin all GitHub Actions to immutable commit SHAs. Use "Bootstrap Guards" (shell conditionals and file existence checks) in workflow files to ensure CI steps only run when the necessary manifest files exist, and handle uninitialized states gracefully.
