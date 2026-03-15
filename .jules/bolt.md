## 2025-12-11 - Bootstrap Guard Pattern for CI Efficiency
**Learning:** In uninitialized repositories lacking manifest files (like `pnpm-lock.yaml`), default CI workflows often fail or waste resources. Implementing a "Bootstrap Guard" using `if: hashFiles('pnpm-lock.yaml') != ''` at the step or job level prevents these failures and saves CI minutes.
**Action:** Always implement conditional execution for installation, build, and test steps in CI workflows to handle early-stage project states gracefully.
