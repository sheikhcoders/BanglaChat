## 2026-08-07 - Real-Time Screen Reader Feedback in Chat Interfaces

**Learning:** Chat interfaces require dynamic screen reader feedback. Using `role="log"` coupled with `aria-live="polite"` ensures new messages are announced automatically without disrupting user input. Using programmatic `.append()` and `document.createTextNode` completely prevents XSS vulnerabilities while keeping code secure and maintainable.
**Action:** Always use secure textNode rendering and `role="log"` with `aria-live="polite"` for activity logs.

## 2026-08-08 - Keyboard Access for Scrollable Containers and Clear Focus Visibility

**Learning:** Keyboard-only users are often unable to read or scroll through long content or message histories if the scrollable area itself is not focusable. By adding `tabindex="0"` with a clear descriptive `aria-label` to overflow regions, keyboard users can focus and scroll utilizing arrow keys. Additionally, standard focus rings can be styled with `:focus-visible` to avoid showing focus borders on mouse click while preserving them for keyboard tabs.
**Action:** Always add `tabindex="0"` and an appropriate accessible label to scrollable elements, and use high-contrast `:focus-visible` styles for critical components.
