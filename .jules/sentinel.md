# Sentinel's Security Journal

## 2026-11-09 - CI Workflow Hardening in Early-Stage Repositories
**Vulnerability:** Default CI workflows lacked top-level least-privilege permission boundaries, persisted checkout authentication tokens across steps (`persist-credentials: true` by default), lacked job execution timeouts (creating denial-of-service and runaway resource consumption risks), and assumed immediate presence of `package.json` / lockfiles causing CI job failures.
**Learning:** Starter workflows provided by default templates omit security hardening features (such as scoped `permissions`, `persist-credentials: false`, and `timeout-minutes`). In addition, configuring setup caching without package lockfiles causes unnecessary workflow failures in new or evolving repositories.
**Prevention:** Always declare top-level `permissions: contents: read` explicitly, disable `persist-credentials` unless pushing git tags/commits is necessary, enforce job-level `timeout-minutes: 15`, and guard dependency build/test steps with `hashFiles('package.json') != ''`.
