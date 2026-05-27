## 2026-05-26 - CI Compute Optimization
**Learning:** In uninitialized repositories or those with frequent documentation-only updates, CI workflows can consume significant unnecessary compute resources. Adding `paths-ignore` for journals/documentation and job-level `if: hashFiles('package.json') != ''` guards prevents failing runs and saves resources.
**Action:** Always include documentation paths in `paths-ignore` and use file-presence guards in projects that may exist in an uninitialized state.

## 2026-05-27 - pnpm Setup in GitHub Actions
**Learning:** The `actions/setup-node` caching mechanism (`cache: 'pnpm'`) requires the package manager to be pre-installed on the runner. Therefore, `pnpm/action-setup` must precede `setup-node` in the workflow steps to ensure successful cache configuration.
**Action:** Ensure `pnpm/action-setup` is called before `actions/setup-node` when using `cache: 'pnpm'`.
