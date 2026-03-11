## 2025-03-11 - Bootstrap Guard Pattern for CI Stability
**Vulnerability:** CI workflow failures in uninitialized repositories lacking manifest files.
**Learning:** Default GitHub Actions templates often assume `package.json` and a lockfile (`package-lock.json`) are present. Running `npm run build` without a `package.json` or enabling caching without a lockfile causes job failures.
**Prevention:** Use the "Bootstrap Guard" pattern:
1. Make `cache` conditional: `cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}`.
2. Make dependency steps conditional on lockfile: `if: hashFiles('package-lock.json') != ''`.
3. Make build steps conditional on manifest: `if: hashFiles('package.json') != ''`.
