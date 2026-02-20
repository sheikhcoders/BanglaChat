## 2026-02-20 - GitHub Actions Hardening & Bootstrap-aware CI
**Vulnerability:** Permissive default GitHub Actions permissions, credential persistence, and fragile CI steps in uninitialized repositories.
**Learning:** Default CI/CD configurations often grant more permissions than necessary and persist credentials. Additionally, standard CI steps (like `actions/setup-node` caching) can fail in uninitialized repositories, leading to broken builds that obscure security posture.
**Prevention:**
1. Always enforce the principle of least privilege using `permissions: contents: read`.
2. Set `persist-credentials: false` in `actions/checkout`.
3. Implement job timeouts to mitigate resource exhaustion.
4. Use "Bootstrap-aware CI" patterns (detection steps with conditional outputs) to allow CI to skip manifest-dependent steps gracefully in early-stage projects.
