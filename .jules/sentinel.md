## 2026-10-03 - CI/CD Pipeline Hardening & Action Pinning
**Vulnerability:** GitHub Actions workflows without explicit top-level read-only permissions (`permissions: contents: read`), unpinned third-party action tags (e.g. `v4`), and `persist-credentials: true` (default) expose the CI runner and repository secrets to credential theft and supply chain compromise in PR builds.
**Learning:** Default GitHub Actions permissions can grant write access to `GITHUB_TOKEN` depending on repository settings, and tag-based action references (`v4`) can be mutated or hijacked upstream.
**Prevention:** Enforce top-level `permissions: contents: read`, set `timeout-minutes: 15`, disable `persist-credentials` on checkout, and pin actions to explicit 40-character commit SHAs.
