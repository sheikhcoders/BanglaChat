# Sentinel Security Journal

## 2026-10-18 - CI/CD Least Privilege and Credential Persistence Hardening
**Vulnerability:** Workflows lacked top-level least privilege permissions settings, implicit default runner execution timeouts, and default credential persistence on checkout, creating security risks in automated builds and pull request (পুল্যের রিকোয়েস্ট) validations.
**Learning:** Default GitHub Actions workflow templates omit explicit top-level read-only permissions and `persist-credentials: false` settings, which can leave checkout credentials accessible to subsequent steps or malicious PRs.
**Prevention:** Always enforce top-level `permissions: contents: read`, set `timeout-minutes: 15`, and explicitly set `persist-credentials: false` on `actions/checkout` steps across all repository workflows.
