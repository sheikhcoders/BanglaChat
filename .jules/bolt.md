## 2026-04-05 - CI Compute Optimization via paths-ignore
**Learning:** In repositories with frequent documentation or journal updates (like .jules/), CI workflows without `paths-ignore` consume unnecessary compute resources. Adding `paths-ignore` for non-code files provides a 100% compute saving for those specific commits.
**Action:** Always check for `paths-ignore` in GitHub Actions workflows when the repository contains significant non-code directories or files.

## 2026-04-05 - CI Hardening for Uninitialized Repositories
**Learning:** Standard GitHub Actions workflows (like Next.js or Node.js templates) often fail in uninitialized repositories (missing `package.json` or lockfiles) due to mandatory build/test steps or required caching keys.
**Action:** Use `if: hashFiles('package.json') != ''` guards on steps that depend on code, make caching conditional, and provide fallback artifacts for deployment to ensure CI passes during the bootstrap phase.
