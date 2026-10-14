# Sentinel Journal - Critical Security Learnings

## 2026-10-13 - CI Runner Permissions and Uninitialized Repository Guarding
**Vulnerability:** Default CI GitHub Actions workflows run with full `write` token permissions unless explicitly bounded by `permissions: contents: read`, exposing repository secrets/tokens in pull request builds. Furthermore, build steps fail on empty repositories without `package.json`.
**Learning:** Hardening `permissions: contents: read`, pinning third-party GitHub Actions to 40-character commit SHAs, setting `persist-credentials: false`, and adding step conditions (`steps.check_package_json.outputs.has_pkg == 'true'`) prevents supply-chain exploits and maintains CI stability across repo initialization states.
**Prevention:** Always enforce explicit read-only permissions, SHA action pinning, credential isolation, and guard package execution steps in base CI templates.
