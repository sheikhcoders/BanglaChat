## 2026-07-01 - CI Efficiency and Runner Usage
**Learning:** Default GitHub Action templates often lack concurrency control and path filtering, leading to wasted runner minutes on redundant builds or documentation-only changes.
**Action:** Implement `concurrency` with `cancel-in-progress: true` and `paths-ignore` for non-code files.

## 2026-07-01 - Resilience in Early Stage Repositories
**Learning:** Running `npm ci` or build scripts in a repository without a `package.json` or lockfile causes workflow failures.
**Action:** Guard manifest-dependent steps with `if: hashFiles(...)` to ensure CI reflects the project state accurately without failing on missing infrastructure.
