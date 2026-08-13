## 2026-08-05 - GitHub Actions Supply Chain Attack Mitigation

**Vulnerability:** Runaway/rogue execution, compromised third-party dependencies/actions, and unintended credential exposure in CI/CD workflows.
**Learning:** Default workflows often lack job timeouts, use mutable action tags (e.g., `@v4`) which can be updated to point to malicious code by an attacker, and checkout code with elevated/persist-credentials enabled by default. Furthermore, in uninitialized/bare repositories, lacking checks for package manifests like `package.json` results in predictable workflow failures (e.g., "Dependencies lock file is not found").
**Prevention:** Pin all action references to immutable 40-character commit SHAs. Set `persist-credentials: false` in checkout actions. Explicitly declare job-level `timeout-minutes: 15` and restrict global permissions to `permissions: contents: read` or specific least-privilege tokens. Implement step-level conditional existence checks for `package.json` to handle bootstrapping and uninitialized states cleanly.

## 2026-08-08 - Defensive Input Validation Security Enhancement in 'index.html'

**Vulnerability:** Client-side Denial of Service (DoS) and excessive browser memory consumption from parsing or rendering abnormally large message payloads.
**Learning:** Standard text inputs without maximum length parameters can accept extremely large strings (e.g., millions of characters), which could freeze a user's browser during DOM rendering, even when rendering securely with `document.createTextNode`.
**Prevention:** Apply an HTML `maxlength` restriction on the input element alongside a programmatic validation check inside the submit handler to enforce strict bounds on length before processing.
