## 2025-03-16 - Bootstrap Guard Pattern for CI Efficiency
**Learning:** In uninitialized repositories lacking manifest files (like `pnpm-lock.yaml`), default CI workflows often fail or waste resources. Implementing a "Bootstrap Guard" using `if: steps.detect-pm.outputs.pm != ''` (or equivalent) at the step level, and setting job outputs to conditionally skip downstream jobs, prevents these failures and saves CI minutes.
**Action:** Always implement conditional execution for installation, build, and test steps in CI workflows to handle early-stage project states gracefully.
