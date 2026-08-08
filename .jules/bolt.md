# Bolt's Journal - Critical Learnings

## 2026-08-08 - DOM lookup caching in simple static forms
**Learning:** In simple vanilla JavaScript web pages, querying the DOM with `document.getElementById` inside high-frequency event handlers or form submissions is a performance anti-pattern. While modern engines are fast, each lookup requires scanning/traversing the DOM tree. Caching references to active DOM nodes at initialization completely avoids query overhead and yields O(1) performance during user interactions without adding custom libraries.
**Action:** Always cache references to DOM nodes once during script initialization rather than querying them inside event listeners, render loops, or repeated functional calls.
