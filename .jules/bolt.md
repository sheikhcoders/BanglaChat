## 2025-03-31 - [CI Efficiency & Resource Optimization]
**Learning:** Implementing `paths-ignore` for documentation and journal files (`README.md`, `.jules/**`) provides 100% compute savings for non-functional updates. The "Bootstrap Guard" pattern (creating a fallback directory and using conditional artifact paths) ensures CI stability in uninitialized repository states while maintaining efficiency.
**Action:** Always include `paths-ignore` for non-code files and use `Bootstrap Guard` to prevent redundant step execution in new or uninitialized projects.
