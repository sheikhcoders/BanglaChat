## 2026-04-05 - CI Workflow Hardening
**Vulnerability:** Supply chain attacks via mutable action tags and over-permissive default permissions.
**Learning:** Default GitHub Actions permissions can be too broad, and using tags like `@v4` allows action maintainers (or attackers who compromise their accounts) to change the code running in CI without notice.
**Prevention:** Pin actions to full-length commit SHAs and explicitly define minimal permissions (e.g., `contents: read`).
