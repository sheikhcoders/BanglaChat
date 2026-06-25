## 2026-06-25 - Hardened CI/CD Workflows
**Vulnerability:** Supply chain attacks and overly permissive CI/CD tokens.
**Learning:** Default GitHub Actions permissions are often too broad, and using version tags for actions leaves the workflow vulnerable if a tag is moved to a malicious commit.
**Prevention:** Always enforce global `permissions: contents: read`, set job timeouts to prevent resource exhaustion, and pin actions to verified SHAs. Ensure CI workflows handle uninitialized repository states gracefully by making features like caching and package manager detection conditional.
