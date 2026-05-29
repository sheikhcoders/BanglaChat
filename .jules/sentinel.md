## 2026-05-29 - CI/CD Supply Chain Hardening
**Vulnerability:** GitHub Actions workflows were using mutable version tags and had default (broad) token permissions, creating a risk for supply chain attacks and unauthorized repository access if an action is compromised.
**Learning:** Standard CI templates often prioritize ease-of-use over security, leading to the use of tags like `@v4` which can be moved by malicious actors. Uninitialized repositories also trigger unnecessary CI failures which can be mitigated with job-level guards.
**Prevention:** Always pin GitHub Actions to full 40-character commit SHAs, explicitly define minimum required `permissions`, and use `if` guards to skip jobs in uninitialized states.
