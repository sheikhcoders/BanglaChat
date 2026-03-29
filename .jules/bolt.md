## 2024-03-30 - CI Efficiency via Paths Filtering
**Learning:** CI pipelines in uninitialized repositories frequently trigger on documentation-only updates, wasting compute minutes and increasing developer feedback loops. Implementing `paths-ignore` for non-functional files like `README.md` and `.jules/**` provides a 100% compute saving for those commits.
**Action:** Always verify if new documentation or journal files are excluded from CI triggers in the workflow configuration.
