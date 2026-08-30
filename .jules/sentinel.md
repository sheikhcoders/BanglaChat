# Sentinel Security Journal

## 2026-08-30 - GitHub Actions Supply Chain & Uninitialized State Hardening
**Vulnerability:** CI workflow executing third-party actions with implicit permissions and unpinned tags, plus failing on missing package.json/lockfile in initial repository state.
**Learning:** In uninitialized or lightweight repositories, `setup-node` caching or `npm ci` without `package.json` fails build jobs. Furthermore, default token permissions and unpinned action tags expose pipelines to potential supply chain tampering and excessive privilege risks.
**Prevention:** Always declare explicit `permissions: contents: read`, set job timeouts, disable credential persistence on checkout, pin actions to immutable 40-char SHAs, and guard dependency steps behind inline `package.json` existence checks.
