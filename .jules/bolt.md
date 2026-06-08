## 2026-06-08 - Optimized CI/CD Performance and Resilience

**Learning:** In uninitialized or documentation-heavy repositories, default CI/CD workflows waste compute resources. Implementing `paths-ignore` for non-code files and robust package manager detection with step-level guards prevents unnecessary failures and saves minutes of runner time.

**Action:** Always include `paths-ignore` for documentation and journals. Use dynamic package manager detection that gracefully handles missing `package.json` to ensure CI resilience during the initial project setup phase.
