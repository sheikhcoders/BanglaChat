## 2026-09-07 - Inline confirmation pattern for destructive actions
**Learning:** Destructive actions like clearing chat logs require inline 2-step confirmation with auto-reset timers to prevent accidental loss of context while keeping UI non-modal.
**Action:** Use a 3-second temporary button state toggle with clear bilingual ARIA label announcements for confirmation triggers.

## 2026-09-18 - Standardized Keyboard Shortcuts & Limit Announcements
**Learning:** Pairing `aria-keyshortcuts` on interactive form controls with live screen reader announcements (`#status-announcer`) ensures assistive technologies convey available shortcut bindings and boundary state changes immediately.
**Action:** Always provide explicit `aria-keyshortcuts` attributes alongside visible shortcut legends (`<kbd>`) and trigger live polite announcements when shortcuts or limits are activated.
