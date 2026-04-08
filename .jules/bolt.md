## 2026-04-07 - CI Hardening in Uninitialized Repositories
**Learning:** In repositories that are just starting (uninitialized), CI workflows can fail due to missing configuration files (`package.json`, lockfiles). Over-optimizing with `if` guards on individual steps can lead to confusing "silent failures" where dependency installation is skipped but build steps proceed and fail.
**Action:** Use a "smart" installation step that falls back to `npm install` if a lockfile is missing, and ensure the entire job or relevant steps are skipped only when no `package.json` is present at all.
