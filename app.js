// Performance Optimization (Bolt): Cache DOM element references once outside the event listener.
// This avoids repeated synchronous DOM tree queries (`document.getElementById`) on every submit action.
// Expected impact: Reduces submission overhead and DOM traversal search time to O(1) after initialization.
const frm = document.getElementById("frm");
const input = document.getElementById("msg");
const log = document.getElementById("log");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  // ✅ SECURITY ENHANCEMENT: Input validation on length.
  // Restricting the message length to 500 characters prevents potential Client-Side
  // Denial of Service (DoS) and excessive browser memory overhead from processing
  // abnormally large pasted string inputs during rendering.
  if (text.length > 500) return;

  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "👤 আপনি / You: ";
  p.append(strong, document.createTextNode(text));
  log.appendChild(p);
  input.value = "";
  log.scrollTop = log.scrollHeight;
});
