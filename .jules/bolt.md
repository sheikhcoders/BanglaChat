## 2024-03-30 - CI Efficiency via Paths Filtering
**Learning:** CI pipelines in uninitialized repositories frequently trigger on documentation-only updates, wasting compute minutes and increasing developer feedback loops. Implementing `paths-ignore` for non-functional files like `README.md` and `.jules/**` provides a 100% compute saving for those commits.
**Action:** Always verify if new documentation or journal files are excluded from CI triggers in the workflow configuration.

## 2024-03-31 - CI Bootstrap Guards for Uninitialized Repos
**Learning:** CI pipelines frequently fail in uninitialized repositories because core actions like `setup-node` expect package manifests or lockfiles. Implementing "Bootstrap Guards" (e.g., conditional caching and step-level `if: hashFiles('package.json') != ''`) ensures CI passes even before the first manifest is added, facilitating smooth initial project setup.
**Action:** Use conditional logic for `cache` in `setup-node` and guard build/install steps in early project stages.
