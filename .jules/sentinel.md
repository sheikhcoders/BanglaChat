## 2025-03-11 - Bootstrap Guard Pattern for CI Stability
**Vulnerability:** CI workflow failures in uninitialized repositories lacking lockfiles.
**Learning:** Default GitHub Actions templates often assume a lockfile (`package-lock.json`) is present. Running `npm ci` or enabling caching without one causes job failures, which can block development and signal false negatives.
**Prevention:** Use the "Bootstrap Guard" pattern: make `cache` and dependency-reliant steps (`npm ci`, `npm test`) conditional on the presence of a lockfile using `if: hashFiles('package-lock.json') != ''`.
