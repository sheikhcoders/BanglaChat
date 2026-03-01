# Sentinel Journal

## 2026-03-01 - CI Robustness for Empty Repositories
**Vulnerability:** CI/CD workflow failure in uninitialized repositories.
**Learning:** Default CI workflows often assume the presence of `package.json` and lockfiles. In a newly initialized or empty repository, these workflows fail during the setup-node or dependency installation phase, blocking subsequent development.
**Prevention:** Implement "Bootstrap-aware CI" by adding detection steps that check for the existence of package manifests. Use conditional execution (`if: steps.detect.outputs.found == 'true'`) to gracefully skip steps that depend on these files, ensuring the CI remains green and helpful during the early stages of a project.
