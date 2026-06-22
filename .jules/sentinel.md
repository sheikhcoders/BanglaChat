## 2026-06-21 - CI/CD Workflow Hardening
**Vulnerability:** Potential for supply chain attacks via floating action tags and privilege escalation through overly permissive GITHUB_TOKEN.
**Learning:** Default GitHub Actions workflows often lack explicit permissions and use version tags (e.g., @v4) which can be targeted by tag-shifting attacks. In uninitialized repositories, these workflows fail and waste compute unless guarded.
**Prevention:** Always enforce global `permissions: contents: read`, pin actions to verified commit SHAs, and implement job-level `if` guards to verify repository state (e.g., `hashFiles('package.json') != ''`) before execution.
