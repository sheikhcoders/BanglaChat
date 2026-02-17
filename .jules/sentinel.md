## 2026-02-17 - Workflow Hardening in Uninitialized Repositories
**Vulnerability:** Standard CI/CD workflows (like `actions/setup-node`) often fail by default in uninitialized repositories (e.g., missing `package.json` or lockfiles) when caching is enabled.
**Learning:** Security hardening (like restricting permissions and disabling credential persistence) should be coupled with robust, conditional logic to prevent breaking CI in early-stage projects.
**Prevention:** Use `hashFiles()` to conditionally enable caching and step-level `if` guards to skip manifest-dependent commands when files are missing.
