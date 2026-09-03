# Sentinel's Journal 🛡️

## 2026-09-03 - Supply Chain Hardening & Uninitialized Repository CI Defense
**Vulnerability:** Default GitHub Actions permissions allow write access across repositories, unpinned actions introduce supply chain risk, and missing package.json causes setup-node caching failures.
**Learning:** In uninitialized repositories, `actions/setup-node` with `cache: 'npm'` fails if `package-lock.json` / `package.json` does not exist. Adding an inline step guard avoids build crashes before dependencies exist.
**Prevention:** Always enforce top-level read-only permissions (`permissions: contents: read`), set job timeouts, set `persist-credentials: false`, pin actions to immutable 40-character SHAs, and add inline package.json existence guards.
