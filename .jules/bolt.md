## 2026-07-01 - CI Efficiency in Uninitialized Repositories
**Learning:** In repositories that are not yet fully initialized (lacking a `package.json`), standard CI workflows for Node.js or Next.js often fail early because they expect manifests. Additionally, documentation changes shouldn't trigger expensive CI runs.
**Action:** Use `if: hashFiles('package.json') != ''` guards on all manifest-dependent steps and implement `paths-ignore` for non-code files (like `README.md` and `.jules/**`) to ensure CI resilience and efficiency from day one.
