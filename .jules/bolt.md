# Bolt's Performance Journal ⚡

## 2025-05-15 - CI Efficiency in Uninitialized Repositories
**Learning:** Running full CI pipelines (like `npm ci` and tests) in repositories that haven't been initialized with a `package.json` leads to guaranteed failures and wasted runner minutes.
**Action:** Implement "bootstrap-aware" workflows that detect the presence of package manifests before attempting to run language-specific toolchains.
