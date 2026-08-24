## 2026-08-16 - DOM Mutation Guarding & Fragment Batching in Real-Time Input Handlers

**Learning:** Unconditional property writes in high-frequency event handlers (such as assigning `className` or `hidden` on every single keypress) trigger unnecessary JS property setter overhead and DOM updates even when the value hasn't changed. Guarding DOM property assignments (`if (counter.className !== targetClass) counter.className = targetClass;`) eliminates redundant setter executions. Furthermore, using `DocumentFragment` to batch multi-element DOM additions (like user messages and typing indicators) reduces sequential layout calculations prior to scroll adjustments.

**Action:** Always guard DOM property setters in `input`/`keypress` handlers when the state remains constant for long sequences of events, and use `DocumentFragment` when appending multiple related nodes simultaneously.

## 2026-08-20 - Extracting Inline JS Style Mutations to CSS Classes & Static Cache Hits

**Learning:** Mutating multiple inline JavaScript `style` properties on newly created DOM elements (e.g. `timeEl.style.fontSize`, `color`, `margin`, `fontWeight`) introduces repetitive JS object property setter calls and style recalculations per element creation. Delegating element styling to dedicated CSS classes (`.chat-timestamp` and `.typing-indicator`) reduces inline style assignments to zero. Additionally, ensuring helper parameters passed to digit translation functions (like `toBengaliDigits`) are pre-coerced or passed as numeric integers guarantees 100% hit rate on pre-computed static memoization tables (`BN_CACHE`), avoiding fallback string parsing.

**Action:** Always prefer CSS classes over inline JS `style` mutations when instantiating dynamic DOM elements, and ensure numeric parameters passed to static memoization caches match expected integer types.
