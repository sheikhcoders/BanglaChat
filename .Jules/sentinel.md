# Sentinel's Security Journal

## 2026-04-12 - GitHub Actions Hardening in Uninitialized Repositories
**Vulnerability:** Supply-chain risks through mutable GitHub Action tags and overly permissive default tokens.
**Learning:** Hardening measures like SHA pinning and minimal permissions (`contents: read`) can cause CI failures in uninitialized repositories if standard steps (like `npm ci` or `setup-node` caching) expect a `package.json` or lockfile that doesn't exist yet.
**Prevention:** Use conditional guards (e.g., `if: hashFiles('package.json') != ''`) and provide fallback mechanisms (like a default package manager or dummy artifact directories) when implementing security hardening in early-stage projects.
