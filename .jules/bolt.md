## 2026-04-02 - Optimize CI compute with paths-ignore
**Learning:** In projects with multiple CI workflows, documentation-only commits (e.g., README.md, journal entries) trigger unnecessary and costly compute runs. Implementing `paths-ignore` for these files provides 100% compute savings for such commits.
**Action:** Always include `paths-ignore` for non-code files (README.md, .jules/**, etc.) in GitHub Actions workflows to reduce developer feedback loops and resource consumption.
