## 2026-09-22 - CI Workflow Optimization for Uninitialized and Active Repositories

**Learning:** Using `cache: npm` in `actions/setup-node` fails CI builds when `package-lock.json` is missing in uninitialized repositories. Relying on `actions/cache@v4` with a conditional guard (`hashFiles('package-lock.json') != ''`) ensures safe dependency caching without breaking early repo states. Combining this with `paths-ignore` (`**.md`, `.jules/**`), `cancel-in-progress: true`, job timeouts (`timeout-minutes: 15`), and `package.json` existence guards optimizes build times and avoids wasting GitHub Actions compute minutes on documentation updates or cancelled runs.

**Action:** In Node.js / Next.js CI workflows, pair `paths-ignore` and concurrency cancellation with step guards and conditional `actions/cache@v4` caching rather than built-in setup-node caching when lockfiles might not exist yet.
