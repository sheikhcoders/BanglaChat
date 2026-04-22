# Palette's UX Journal

## 2026-04-22 - Bilingual Accessible Documentation Pattern
**Learning:** For projects serving the Bengali-speaking community, using a single top-level <h1> with both English and localized names, combined with ARIA-labeled regional divs and explicit HTML child tags, ensures maximum screen reader compatibility and internationalization support.
**Action:** Always wrap bilingual sections in <div lang="..." role="region" aria-label="..."> and use HTML tags like <h2> and <p> for inner content to avoid Markdown rendering issues in HTML blocks.

## 2026-04-22 - CI/DX Robustness for Uninitialized Repositories
**Learning:** For new projects, CI workflows should be "bootstrap-aware." Rigidly requiring manifest files (like `package.json`) or lockfiles during initial setup causes "Day 0" friction and broken builds for documentation-only changes.
**Action:** Implement guards (e.g., `if: steps.detect-package-manager.outputs.manager != ''`) and conditional caching logic in GitHub Actions to ensure a smooth DX from the very first commit.
