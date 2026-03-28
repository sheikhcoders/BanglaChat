## 2025-05-15 - Hardened CI Workflows
**Vulnerability:** Supply chain attacks via mutable GitHub Action tags and potential CI resource exhaustion.
**Learning:** Using tags like `@v4` is convenient but risky as they can be moved. Missing timeouts and concurrency limits can lead to hung jobs or excessive runner usage.
**Prevention:** Pin all GitHub Actions to immutable commit SHAs. Implement job-level `timeout-minutes`, explicit `permissions`, and top-level `concurrency` blocks. Use 'Bootstrap Guards' (`if: hashFiles('package.json') != ''`) to prevent CI failures in uninitialized repository states.
