## 2026-08-31 - CI Workflow Concurrency and Path Filtering Optimization

**Learning:** Unfiltered CI workflow triggers on non-code changes (like `.md` updates) and redundant matrix builds on fast sequential pushes waste significant GitHub Actions runner time and queue capacity. Adding top-level `concurrency` with `cancel-in-progress: true`, `paths-ignore` for non-code files (`**.md`), and zero-cost inline step guards for `package.json` existence drastically cuts wasted CI compute cycles and accelerates feedback loops.

**Action:** Always include concurrency cancellation controls, `paths-ignore` filters for documentation files, job timeouts, and conditional step guards when configuring CI/CD workflows.
