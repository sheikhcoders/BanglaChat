# Sentinel's Security Journal

## 2026-11-08 - CI Workflow Hardening in Early-Stage Repositories
**Vulnerability:** Default GitHub Actions workflows execute without explicit least-privilege permission blocks, persist GITHUB_TOKEN credentials in local git checkout config, lack job execution timeouts, and attempt unconditional dependency installation/caching even when no package.json exists.
**Learning:** In repositories prior to web application initialization, templates often grant overly broad default GitHub token permissions and can leak repository credentials to downstream tasks or runner steps. Missing timeouts leave runner resources susceptible to denial of service or hanging builds. Furthermore, attempting npm cache or ci without package manifests causes workflow runs to fail.
**Prevention:** Always declare top-level read-only permissions (`permissions: contents: read`), pass `persist-credentials: false` to `actions/checkout`, set explicit job timeouts (`timeout-minutes: 15`), and guard dependency steps with manifest checks (`hashFiles('package.json') != ''`).
