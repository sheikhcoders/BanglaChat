## 2026-08-16 - DOM Mutation Guarding & Fragment Batching in Real-Time Input Handlers

**Learning:** Unconditional property writes in high-frequency event handlers (such as assigning `className` or `hidden` on every single keypress) trigger unnecessary JS property setter overhead and DOM updates even when the value hasn't changed. Guarding DOM property assignments (`if (counter.className !== targetClass) counter.className = targetClass;`) eliminates redundant setter executions. Furthermore, using `DocumentFragment` to batch multi-element DOM additions (like user messages and typing indicators) reduces sequential layout calculations prior to scroll adjustments.

**Action:** Always guard DOM property setters in `input`/`keypress` handlers when the state remains constant for long sequences of events, and use `DocumentFragment` when appending multiple related nodes simultaneously.
