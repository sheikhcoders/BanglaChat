## 2025-03-05 - CI Cache Optimization for Uninitialized Repositories

**Learning:** Hardcoding `cache: 'npm'` in GitHub Actions when `package-lock.json` is missing causes the `setup-node` action to fail, blocking the entire pipeline. Using a conditional check like `cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}` ensures the workflow remains resilient and efficient during early project setup or in multi-environment monorepos.

**Action:** Always use conditional expressions for CI caching in repositories where manifest files might be absent or vary across branches.
