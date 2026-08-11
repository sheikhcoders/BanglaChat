## 2026-08-07 - Real-Time Screen Reader Feedback in Chat Interfaces

**Learning:** Chat interfaces require dynamic screen reader feedback. Using `role="log"` coupled with `aria-live="polite"` ensures new messages are announced automatically without disrupting user input. Using programmatic `.append()` and `document.createTextNode` completely prevents XSS vulnerabilities while keeping code secure and maintainable.
**Action:** Always use secure textNode rendering and `role="log"` with `aria-live="polite"` for activity logs.

## 2026-08-08 - Accessible, Real-Time Bilingual Character Counting

**Learning:** Real-time feedback for input constraints must be accessible to both screen readers and visual users in localized apps. Associating a character counter to an input field using `aria-describedby` informs screen readers of the constraint upon focus, and configuring the counter with `aria-live="polite"` notifies screen readers when key character thresholds are met without interrupting typing. Localizing counters using a custom digit translator (e.g., translating English numerals to Bengali digits) respects regional contexts and reduces cognitive strain for native language users.
**Action:** Always link character counters to inputs with `aria-describedby`, leverage `aria-live="polite"` selectively, and localize digits to improve visual/screen-reader cognitive UX.
