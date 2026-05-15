# Sentinel's Security Journal 🛡️

## 2026-05-15 - Initial Security Hardening
**Vulnerability:** Weak CI/CD supply chain and overly permissive workflow permissions.
**Learning:** Default GitHub Actions workflows often lack explicit permissions and use mutable tags for actions, which can be vulnerable to tag-shifting or compromised actions.
**Prevention:** Pin actions to specific SHAs and enforce minimal GITHUB_TOKEN permissions at the job level.
