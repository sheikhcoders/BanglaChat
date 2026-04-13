# Bolt's Performance Journal

## 2026-04-13 - CI Compute Optimization
**Learning:** In uninitialized repositories or documentation-heavy projects, CI workflows often trigger unnecessarily for non-code changes, wasting compute resources and providing slow feedback loops.
**Action:** Implement `paths-ignore` for `README.md`, `.Jules/**`, and `.github/SECURITY.md` in all CI workflows to ensure they only run when relevant code changes are made.

## 2026-04-13 - CI Stability & Hardening
**Learning:** In uninitialized repositories, standard CI workflow templates for Node.js and Next.js fail because they assume `package.json` and lockfiles exist. `actions/setup-node` specifically fails if `cache: npm` is set but no lockfile is found.
**Action:** Harden CI workflows by using conditional logic for caching (`cache: ${{ hashFiles(...) != '' && 'npm' || '' }}`) and adding `if` guards to steps that require a manifest. Use a robust installation step that falls back to `npm install` if a lockfile is missing but `package.json` is present.
