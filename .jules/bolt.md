# Bolt's Journal - Critical Learnings

## 2026-07-30 - [CI Trigger and Architecture Optimization]

**Learning:** In early-stage or uninitialized repositories, running CI workflows on non-code changes (like README, pull request templates, issue templates, and performance journals) wastes GitHub Actions runner minutes. However, using restrictive positive path matching or custom checkout existence check scripts risks letting crucial root configuration changes (e.g. `next.config.js`, `tsconfig.json`) bypass CI validation entirely, or creating silent green checkmarks on broken PRs where `package.json` was deleted.
**Action:** Use secure `paths-ignore` triggers specifically targeting non-code/documentation files to skip unnecessary workflow execution, while guaranteeing that any other code, config, or manifest change triggers standard validation and fails correctly if essential packages are missing.

## 2026-08-01 - [CI Concurrency Controls & Paths Filtering]

**Learning:** Superseded commits on the same branch consume runner minutes and create bottlenecks. Implementing path filtering (`paths-ignore`) and concurrency controls (`cancel-in-progress: true` for CI) dramatically improves developer feedback loops and minimizes wasted resource consumption.
**Action:** Include strict concurrency group configurations on workflow files to conserve execution minutes, but always keep `cancel-in-progress: false` for pages/deployment jobs to avoid leaving deployments in an inconsistent state.

## 2026-08-03 - [Uninitialized Repo Setup-Node Caching Failure]

**Learning:** In uninitialized repositories, `actions/setup-node` immediately fails if standard `cache` input is set (e.g. `cache: npm`) because it mandates the presence of a supported lockfile (like `package-lock.json`). Specifying caching unconditionally on uninitialized branches is a blocker.
**Action:** Implement a lightweight pre-checkout `Check package.json and lockfile` step to dynamically detect the correct manager lockfile and set the `cache_type` output dynamically. Toggling setup-node's `cache` dynamically to empty if no lockfile is found prevents cache validation crashes while keeping caching fully functional once the project is initialized.

## 2026-08-03 - [Decoupled Smart Pre-Check Job for Matrix CI Efficiency]

**Learning:** Performing conditional checks or manifest validations inline across multiple matrix build steps still incurs high spin-up overhead from multiple virtual environments starting in parallel. By isolating this check into a dedicated, single-container, fast-finishing `pre-check` job, we can skip downstream heavy matrix runners and deployment stages entirely before they consume platform minutes.
**Action:** Use a decoupled pre-check job to evaluate repository initialization, passing dynamic output flags that downstream jobs condition on via `needs` and `if` logic.
