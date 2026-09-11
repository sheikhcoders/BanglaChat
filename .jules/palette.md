## 2026-09-07 - Inline confirmation pattern for destructive actions
**Learning:** Destructive actions like clearing chat logs require inline 2-step confirmation with auto-reset timers to prevent accidental loss of context while keeping UI non-modal.
**Action:** Use a 3-second temporary button state toggle with clear bilingual ARIA label announcements for confirmation triggers.
