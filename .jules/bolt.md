# Bolt's Journal - Critical Learnings

## 2026-08-06 - CSS Containment for Scrollable dynamic logs

**Learning:** For dynamic or frequently updated scroll lists/logs (like chat feeds), browser layout reflows and paint recalculations represent a major bottleneck. By utilizing the modern CSS containment property (`contain: content`), we can isolate the sub-tree of the container from the rest of the document. This stops style recalculation, layout passes, and repaints from cascading across the entire DOM tree when elements are dynamically appended, reducing layout-boundary rendering complexity to O(1) for the main document.
**Action:** Always apply `contain: content` or `contain: layout paint` on scrollable containers or frequently updated containers to isolate layout, style, and painting.
