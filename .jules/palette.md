# Palette's UX Journal 🎨

Critical UX and accessibility learnings from the development of BanglaChat.

## 2026-02-18 - Bilingual README as a First Interface

**Learning:** In early-stage repositories without application code, the README is the primary user interface. Localizing it for the target audience (Bengali speakers) is a high-leverage UX win that ensures inclusivity from the start.
**Action:** Always consider localized documentation for region-specific projects even before the first line of UI code is written.

## 2026-02-18 - CI Resilience for Initialized Repositories

**Learning:** Aggressive CI configurations (like mandatory caching or manifest-dependent steps) can block progress in repositories that haven't been fully initialized with a package manager.
**Action:** Use conditional caching (`hashFiles`) and step-level `if` guards to ensure CI remains green even when the repository is still in its "documentation-only" phase.
