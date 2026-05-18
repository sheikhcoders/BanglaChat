# Bolt's Performance Journal ⚡

## 2026-05-17 - CI Compute Optimization in Uninitialized Repositories
**Learning:** CI workflows often default to running on all pushes and failing when core files (like `package.json`) are missing. This wastes compute resources and creates "noise" in the build history.
**Action:** Always implement `paths-ignore` for non-code files and use step-level `if` guards to skip execution when the environment is not yet ready.

## 2026-05-17 - Balancing CI Optimization with Readability and Standard Behavior
**Learning:** While step-level `if` guards can prevent failing runs in uninitialized states, they can introduce significant noise and reduce workflow readability. CI should generally fail if expected files (like `package.json`) are missing to alert developers.
**Action:** Prioritize `paths-ignore` and `concurrency` for compute savings, and follow project-mandated toolchains (like `pnpm`) without sacrificing readability for micro-optimizations of edge cases.

## 2026-05-18 - Effective CI Resilience via Job-Level Guards
**Learning:** For repositories in transition or uninitialized states, a single job-level `if` guard for `package.json` existence is far cleaner and more resource-efficient than multiple step-level guards or letting the CI fail noisily.
**Action:** Use `if: hashFiles('package.json') != ''` at the job level to skip entire builds silently when irrelevant, and ensure caching is conditional on the existence of lockfiles to avoid CI setup failures.
