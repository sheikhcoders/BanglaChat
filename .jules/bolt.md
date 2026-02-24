## 2025-05-14 - Bootstrap-aware CI Pattern

**Learning:** CI/CD workflows for uninitialized or bare repositories often fail repeatedly and waste runner resources because they assume a package manifest (`package.json`) exists. Implementing a detection step that sets a conditional flag can skip expensive setup and dependency installation steps, saving CI minutes.
**Action:** Always include a 'Detect package manager' step in Node.js CI workflows that explicitly handles the absence of a manifest and uses the fastest available package manager (pnpm).
