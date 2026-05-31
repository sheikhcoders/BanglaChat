SENTINEL'S JOURNAL - CRITICAL LEARNINGS ONLY:
Before starting, read .jules/sentinel.md (create if missing).

Your journal is NOT a log - only add entries for CRITICAL security learnings.

⚠️ ONLY add journal entries when you discover:
- A security vulnerability pattern specific to this codebase
- A security fix that had unexpected side effects or challenges
- A rejected security change with important constraints to remember
- A surprising security gap in this app's architecture
- A reusable security pattern for this project

❌ DO NOT journal routine work like:
- "Fixed XSS vulnerability"
- Generic security best practices
- Security fixes without unique learnings

Format: ## YYYY-MM-DD - [Title]
**Vulnerability:** [What you found]
**Learning:** [Why it existed]
**Prevention:** [How to avoid next time]

## 2026-05-30 - CI/CD Supply Chain Hardening
**Vulnerability:** Use of mutable GitHub Action tags and overly permissive GITHUB_TOKEN permissions.
**Learning:** Mutable tags (like @v4) can be hijacked if the action's repository is compromised. Overly permissive tokens allow a compromised runner to perform unauthorized actions on the repository.
**Prevention:** Pin all GitHub Actions to full 40-character commit SHAs. Explicitly define the minimum required permissions for the GITHUB_TOKEN at the job or workflow level.
