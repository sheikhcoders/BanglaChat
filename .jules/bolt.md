## 2026-10-28 - CI Workflow Performance in Minimal Repositories

**Learning:** In minimal or uninitialized repositories lacking `package.json` or test suites, default GitHub Actions workflows perform unnecessary steps, throw cache/setup warnings, and consume redundant compute time on doc-only changes.
**Action:** Always add `paths-ignore` (`'**.md'`, `'.jules/**'`) to workflow triggers, enforce strict job `timeout-minutes: 15`, configure `concurrency` auto-cancellation for PR updates, and guard `npm ci` / `npm test` steps with `hashFiles('package.json') != ''` conditions.
