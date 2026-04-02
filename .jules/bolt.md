## 2025-05-14 - CI/CD Optimization with paths-ignore and pnpm
**Learning:** In repositories with frequent documentation or journal updates, implementing `paths-ignore` for `README.md` and `.jules/**` provides a 100% compute saving for those commits, significantly reducing feedback latency for non-code changes. Additionally, standardizing on `pnpm` and pinning GitHub Actions to SHAs improves both build speed and supply chain security.
**Action:** Always check for redundant CI triggers on documentation paths and prioritize `pnpm` with SHA-pinned actions in new or existing workflows.
