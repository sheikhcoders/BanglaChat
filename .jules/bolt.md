## 2025-04-02 - CI Compute and Resource Optimization
**Learning:** CI workflows in uninitialized repositories frequently execute unnecessarily for documentation and journal updates, consuming runner minutes. Hardening with verified SHAs and "Bootstrap Guards" (fallback paths/directories) is critical for stability in early project states.
**Action:** Implement `paths-ignore` for non-code files and robust fallback patterns in GitHub Actions workflows to ensure 100% compute savings for documentation commits and stable builds during project setup.

## 2025-04-02 - Precise CI Configuration Hardening
**Learning:** GitHub Actions workflows are highly sensitive to YAML indentation; a single alignment error in the `steps` block can break the entire pipeline. Additionally, caching strategies in uninitialized states must be multi-lockfile aware (e.g., checking for `package-lock.json`, `yarn.lock`, and `pnpm-lock.yaml`) to avoid performance degradation when switching package managers.
**Action:** Always verify YAML indentation manually or with tools after modification. Use comprehensive `hashFiles` checks for conditional caching to ensure efficiency across all supported package manager ecosystems.
