# Bolt's Journal - Critical Learnings

## 2026-10-04 - CI Workflow Optimization in Uninitialized Repositories
**Learning:** Default GitHub Actions workflow templates (such as Node.js CI) assume the presence of `package.json` and `package-lock.json` and run unnecessary matrix builds on documentation or metadata changes. Guarding workflow execution steps with inline existence checks and configuring `paths-ignore` prevents CI failures and eliminates wasted runner time.
**Action:** Always include `paths-ignore` filters for non-code files (`**.md`, `.jules/**`) and guard package manager invocation steps when standard configuration files might be absent.
