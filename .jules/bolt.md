## 2026-05-09 - CI Compute Optimization for Uninitialized Repositories

**Learning:** In repositories that are in an uninitialized state (missing `package.json`), standard CI workflows for Node.js and Next.js waste significant compute resources. They trigger on documentation or journal updates and often fail due to missing manifest files or lockfiles during dependency installation and caching steps.

**Action:** Optimize CI workflows by implementing `paths-ignore` for documentation and journal files, adding job-level `if` guards to skip execution when `package.json` is missing, and making `actions/setup-node` caching conditional on the existence of a lockfile.
