# Bolt's Journal - Critical Learnings

## 2026-09-26 - CI Workflow Efficiency and Guard Conditions
**Learning:** In projects without initialized Node packages or when editing documentation/journal markdown files, CI workflows run needlessly and can fail when `actions/setup-node` tries to cache NPM dependencies without a `package-lock.json` / `package.json`.
**Action:** Always add `paths-ignore` (`**.md`, `.jules/**`) to workflow triggers, concurrency controls with `cancel-in-progress: true`, job timeouts (`timeout-minutes: 15`), and step guards verifying `package.json` existence before dependency installation/caching steps.
