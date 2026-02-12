## 2025-05-14 - CI Optimization and Case Sensitivity
**Learning:** GitHub Actions runners (ubuntu-latest) use case-sensitive file systems. Path filtering rules (e.g., `paths-ignore`) must match the directory casing exactly to be effective.
**Action:** Always verify the exact casing of directories (like `.jules`) before adding them to workflow ignore rules. Use lowercase consistently for agent-specific directories to avoid confusion.
