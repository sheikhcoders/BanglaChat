# Bolt's Performance Journal

## 2026-04-13 - CI Compute Optimization
**Learning:** In uninitialized repositories or documentation-heavy projects, CI workflows often trigger unnecessarily for non-code changes, wasting compute resources and providing slow feedback loops.
**Action:** Implement `paths-ignore` for `README.md`, `.Jules/**`, and `.github/SECURITY.md` in all CI workflows to ensure they only run when relevant code changes are made.
