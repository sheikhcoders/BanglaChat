## 2026-03-20 - CI/CD Hardening & Security Reporting

**Vulnerability:** Workflows were using mutable tags (e.g., `@v4`) for actions, lacked resource usage controls (timeouts/concurrency), and did not specify job-level permissions.

**Learning:** Pinning actions to immutable commit SHAs protects against supply chain attacks where a tagged version might be overwritten with malicious code. Implementing `timeout-minutes` and `concurrency` guards against resource exhaustion and denial-of-service in CI.

**Prevention:** Always pin GitHub Actions to full 40-character commit SHAs. Define minimal required permissions at the job level. Use `timeout-minutes` to prevent hung jobs from consuming all runner minutes.

## 2026-03-20 - Smart Pre-check for CI Efficiency

**Vulnerability:** Workflows were failing due to missing `package.json` in an uninitialized repository, leading to unnecessary CI noise and false-positive failures.

**Learning:** Implementing job-level `if` conditions (e.g., `if: hashFiles('package.json') != ''`) is more efficient than separate 'pre-check' jobs, as it avoids runner provisioning and checkout overhead while preventing resource waste.

**Prevention:** Use native GitHub Actions expressions at the job level to guard execution in early-stage or uninitialized projects.
