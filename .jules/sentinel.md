## Critical Learnings

- When securing GitHub Actions workflows in repository initial states without `package.json`, inline check guards (`[ -f package.json ]`) prevent pipeline failure while preserving security hardening controls (read-only permissions, SHA pinning, job timeouts).
