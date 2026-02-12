## 2025-02-12 - Accessibility Checklist and CI Robustness for Empty Repositories

**Learning:** In early-stage repositories without application code, metadata files like `README.md` and Pull Request templates serve as the primary user interface. Establishing accessibility standards early via a PR checklist ensures that all future UI code starts with a strong foundation. Additionally, CI workflows must be hardened with guards (e.g., `if: hashFiles(...)`) to prevent failures when manifest or lockfiles are missing in a minimal repo.
**Action:** Always check for `pull_request_template.md` in new projects and include a mandatory Accessibility Checklist if missing. Ensure CI workflows are skip-able if the required project files do not exist.
