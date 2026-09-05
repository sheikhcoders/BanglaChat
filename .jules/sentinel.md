# Sentinel's Journal - Critical Security Learnings

## 2026-09-05 - GitHub Actions CI Supply Chain Hardening & Uninitialized State Defense
**Vulnerability:** Default GitHub Actions workflows execute with implicit write permissions, unpinned third-party action tags subject to tag-mutability attacks, missing job execution timeouts (allowing DDoS resource exhaustion), and default credential persistence on workspace checkouts. Furthermore, uninitialized repositories without `package.json` cause setup-node cache resolution failures.
**Learning:** `setup-node@v4.2.0` SHA `1d0ff469b7ec7b3cb9d8673fde0c81c44821de2a` paired with `actions/checkout@v4.2.2` SHA `11bd71901bbe5b1630ceea73d27597364c9af683` must be pinned with `persist-credentials: false` and `permissions: contents: read` to protect against token extraction and supply chain compromises in CI/CD pipelines.
**Prevention:** Enforce top-level read-only workflow permissions, 15-minute job execution limits, 40-character action commit SHAs, disabled persisted checkout credentials, and inline package existence step guards across all repository workflows.
