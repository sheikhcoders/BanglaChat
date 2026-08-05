# Sentinel's Critical Security Journal

This journal documents critical security learnings, reusable security patterns, and vulnerabilities discovered in the BanglaChat repository.

## 2026-08-03 - Reusable CI/CD Workflow Hardening Pattern

**Vulnerability:** Default GitHub Actions workflows are vulnerable to supply-chain attacks if third-party actions are referenced via mutable Git tags (e.g., `@v4`, `@v5`). If an attacker compromises a third-party action repository, they can move the tag to point to a malicious commit, leading to remote code execution in our runners. Additionally, omitting explicit workflow permissions can grant overly permissive read/write tokens to jobs.
**Learning:** Hardening GitHub Actions is a form of defense in depth. Explicitly declaring `permissions: contents: read` mitigates risks of compromised tokens, and pinning all external actions to immutable 40-character SHA-1 commit hashes guarantees that only reviewed and verified action code is executed.
**Prevention:** Always pin third-party actions to their full 40-character SHA-1 hashes and document version tags in comments for readability. Define strict global permissions and job-level limits, including execution timeouts (`timeout-minutes`) to prevent billing exhaustion.
