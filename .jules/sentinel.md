## 2026-05-30 - CI/CD Supply Chain Hardening
**Vulnerability:** CI/CD Supply Chain risks due to mutable action tags and excessive GITHUB_TOKEN permissions.
**Learning:** Using mutable tags (like @v4) in GitHub Actions allows for potential supply chain attacks if the action repository is compromised. Additionally, default GITHUB_TOKEN permissions are often overly permissive, and lack of timeouts can lead to resource exhaustion.
**Prevention:** Pin all GitHub Actions to full commit SHAs, enforce `permissions: contents: read` (principle of least privilege), and set `timeout-minutes` on all jobs to prevent runaway processes.
