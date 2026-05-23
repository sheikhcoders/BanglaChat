# Bolt's Performance Journal

## 2026-05-22 - [CI Resource Conservation]
**Learning:** In uninitialized repositories, CI workflows trigger on every commit (including documentation) and fail due to missing build files, wasting significant compute resources and developer time.
**Action:** Implement `paths-ignore` for documentation/journals and job-level `if` guards checking for `package.json` existence. Switch to `pnpm` as the performant package manager choice.
