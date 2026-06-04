## 2026-06-04 - CI/CD Performance & Security Hardening
**Learning:** Migrating to pnpm and implementing `paths-ignore` in uninitialized repositories significantly reduces CI resource waste. Job-level guards are essential to prevent failures in uninitialized states while maintaining security through SHA pinning.
**Action:** Always include `paths-ignore` for documentation and implement `hashFiles('package.json') != ''` guards in workflows for new or sparse repositories to maximize efficiency.
