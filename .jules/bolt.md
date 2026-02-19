## 2026-05-22 - CI Efficiency vs. Safety

**Learning:** Hardening CI workflows with `if: hashFiles('package.json') != ''` on core steps (install, test) can save resources in uninitialized repositories but introduces a risk of silent failures. If core files are accidentally deleted in a mature project, CI may skip all tests and report a misleading success.
**Action:** Prioritize explicit failures for core CI steps in mature or growing projects. Use `paths-ignore` and `concurrency` for resource efficiency instead of conditional step skipping based on file existence, unless the project is in a known bootstrap phase where skipping is the explicitly desired behavior.
