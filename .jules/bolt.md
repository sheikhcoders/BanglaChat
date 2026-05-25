# Bolt's Performance Journal - BanglaChat

## 2026-05-24 - CI Compute Optimization
**Learning:** CI workflows run unnecessarily on documentation and journal updates, wasting compute resources. In an uninitialized repository state, CI jobs fail immediately due to missing `package.json`, further wasting resources.
**Action:** Implement `paths-ignore` for non-code files and add job-level `if` guards to check for the existence of `package.json`. Migrate to `pnpm` for faster dependency installation.
