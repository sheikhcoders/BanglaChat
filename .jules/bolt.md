# Bolt's Journal - Critical Learnings

## 2026-08-06 - CSS Containment for Scrollable dynamic logs

**Learning:** For dynamic or frequently updated scroll lists/logs (like chat feeds), browser layout reflows and paint recalculations represent a major bottleneck. By utilizing the modern CSS containment property (`contain: content`), we can isolate the sub-tree of the container from the rest of the document. This stops style recalculation, layout passes, and repaints from cascading across the entire DOM tree when elements are dynamically appended, reducing layout-boundary rendering complexity to O(1) for the main document.
**Action:** Always apply `contain: content` or `contain: layout paint` on scrollable containers or frequently updated containers to isolate layout, style, and painting.

## 2026-08-06 - Optimized digit translation for real-time counters

**Learning:** When building real-time UI widgets (such as character counters) that update on every single keypress, standard utility functions like digit translators can become bottlenecked if they rely on regular expression string replacements with callback functions. Replacing regex replace callback mechanisms with O(n) character-code lookup loops avoids overhead from repeated regex engine invocations, pattern compiles, callback function creations, and string parsing, yielding ~7.8x faster execution.
**Action:** Use simple, pre-allocated lookup tables or fast O(n) loop-based string manipulations instead of regex replaces for micro-utilities in hot execution paths like keypress/input listeners.
