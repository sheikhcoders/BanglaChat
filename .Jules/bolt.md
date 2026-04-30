## 2026-04-29 - CI Resource Optimization in Uninitialized Repositories
**Learning:** CI workflows in uninitialized repositories (lacking `package.json`) waste significant compute resources by attempting to run build/test steps that are guaranteed to fail. Additionally, redundant runs on non-code changes (documentation/journals) and lack of concurrency control further degrade CI efficiency.
**Action:** Implement `paths-ignore` for documentation/journals, enable `cancel-in-progress` for concurrency, and use `hashFiles` guards to skip jobs when project manifests are missing.
