## 2026-07-15 - CI Efficiency in Uninitialized Repositories
**Learning:** Running CI workflows on documentation or journal updates in an uninitialized repository (missing `package.json`) wastes runner minutes and leads to predictable failures due to missing dependencies.
**Action:** Always implement `paths-ignore` for `README.md` and `.jules/**` and use job-level `if: hashFiles('package.json') != ''` guards to skip builds when the project environment isn't ready.
