## 2026-05-07 - CI Supply Chain Hardening
**Vulnerability:** Use of mutable action tags (e.g., @v4) and overly permissive default GITHUB_TOKEN permissions in CI workflows.
**Learning:** In an uninitialized repository state, standard workflow templates can fail or create security gaps if not properly guarded and hardened. Pinning to SHAs prevents tag-flipping attacks.
**Prevention:** Always pin GitHub Actions to full-length commit SHAs, enforce minimal job-level permissions, and use guards like `if: hashFiles('package.json') != ''` to handle uninitialized states gracefully.
