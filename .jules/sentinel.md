# Sentinel's Journal 🛡️

Critical security learnings and codebase-specific patterns.

## 2026-10-02 - CI Workflow Hardening in Uninitialized Repositories
**Vulnerability:** CI workflows with write permissions or unpinned actions risk unauthorized token reuse or supply chain tampering.
**Learning:** In uninitialized repositories, missing package.json causes standard Node CI actions to fail if npm steps run unguarded.
**Prevention:** Always scope workflow permissions to `contents: read`, disable credential persistence (`persist-credentials: false`), pin actions to full 40-character commit SHAs, and add file existence guards before dependency management steps.
