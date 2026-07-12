## 2026-07-11 - CI Supply Chain Hardening
**Vulnerability:** Use of mutable version tags (e.g., `@v4`) in GitHub Actions and permissive default permissions in workflows.
**Learning:** Version tags can be moved to point to different code if an action's repository is compromised or if a tag is deleted and recreated. Permissive permissions allow compromised CI jobs to perform unauthorized actions against the repository.
**Prevention:** Pin all GitHub Actions to immutable full-length commit SHAs and enforce top-level `permissions: contents: read` to follow the principle of least privilege. Added job timeouts and guards to prevent unnecessary runner minute consumption in uninitialized repository states.
