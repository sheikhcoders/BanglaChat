# Sentinel Security Journal

## 2026-09-06 - Uninitialized Repo CI Caching Failures & Action SHA Pinning
**Vulnerability:** CI/CD workflows referencing floating tags (e.g. `@v4`) are vulnerable to supply chain tag hijacking. Additionally, running standard `setup-node` caching in an uninitialized repository (without `package.json` or `package-lock.json`) causes CI execution failures.
**Learning:** Hardening GitHub Actions workflows requires both supply-chain defense (pinning 40-character commit SHAs, enforcing `permissions: contents: read`, setting `persist-credentials: false`, and setting execution timeouts) and defensive conditionals (`if: steps.check_files.outputs.has_package_json == 'true'`) to prevent broken build pipelines during early repo initialization.
**Prevention:** Pin all third-party GitHub Actions to explicit immutable commit SHAs and add explicit file existence guards before running ecosystem setup/install steps in CI.
