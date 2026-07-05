## 2026-07-05 - CI Efficiency in Uninitialized Repositories
**Learning:** In projects that are not yet fully initialized (missing `package.json`), standard CI workflows for Node.js and Next.js will fail and waste runner minutes. Implementing `paths-ignore` for documentation/journals and adding manifest existence guards (`if: hashFiles('package.json') != ''`) prevents these unnecessary failures and saves resources.
**Action:** Always check for repository initialization state and implement CI guards and `paths-ignore` for non-code assets to maximize runner efficiency.
