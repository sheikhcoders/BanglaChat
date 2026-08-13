// Performance Optimization (Bolt): Cache DOM element references once outside the event listener.
// This avoids repeated synchronous DOM tree queries (`document.getElementById`) on every submit action.
// Expected impact: Reduces submission overhead and DOM traversal search time to O(1) after initialization.
const frm = document.getElementById("frm");
const input = document.getElementById("msg");
const log = document.getElementById("log");
const counter = document.getElementById("char-count");

// Helper function to translate English digits to Bengali digits
function toBengaliDigits(num) {
  const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num.toString().replace(/[0-9]/g, (w) => bn[parseInt(w, 10)]);
}

// Helper function to create a formatted semantic <time> element
function createTimestamp() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  const timeEl = document.createElement("time");
  timeEl.style.fontSize = "0.75rem";
  timeEl.style.color = "#64748b";
  timeEl.style.marginLeft = "6px";
  timeEl.style.marginRight = "6px";
  timeEl.style.fontWeight = "normal";
  timeEl.setAttribute("datetime", now.toISOString());

  const bnTime = `${toBengaliDigits(displayHours)}:${toBengaliDigits(minutes)} ${ampm}`;
  const enTime = `${displayHours}:${minutes} ${ampm}`;
  timeEl.textContent = `[${bnTime} | ${enTime}]`;

  return timeEl;
}

// Add timestamp to the initial welcome message for visual consistency
const welcomeMsg = log.querySelector("p");
if (welcomeMsg) {
  const strong = welcomeMsg.querySelector("strong");
  if (strong) {
    const timeEl = createTimestamp();
    strong.after(" ", timeEl, " ");
  }
}

// Real-time character counter update
input.addEventListener("input", () => {
  const len = input.value.length;
  counter.textContent = `${toBengaliDigits(len)} / ৫০০ অক্ষর | ${len} / 500 characters`;
  if (len >= 500) {
    counter.className = "char-counter danger";
  } else if (len >= 450) {
    counter.className = "char-counter warning";
  } else {
    counter.className = "char-counter";
  }
});

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
  strong.textContent = "👤 আপনি / You:";

  // Micro-UX Enhancement (Palette): Format and append a localized, bilingual timestamp via a semantic <time> element.
  const timeEl = createTimestamp();

  p.append(strong, " ", timeEl, " ", document.createTextNode(text));
  log.appendChild(p);

  // Reset form and counter
  input.value = "";
  counter.textContent = "০ / ৫০০ অক্ষর | 0 / 500 characters";
  counter.className = "char-counter";

  log.scrollTop = log.scrollHeight;

  // Micro-UX Enhancement (Palette): Simulated Bot Reply with an accessible Typing Indicator.
  // When a user submits a message, we temporarily show an italicized, stylized typing status.
  // This is announced politely to screen readers via role="log" and aria-live="polite".
  const typingEl = document.createElement("p");
  typingEl.id = "typing";
  typingEl.style.color = "#64748b";
  typingEl.style.fontStyle = "italic";

  const typingStrong = document.createElement("strong");
  typingStrong.textContent = "🤖 বট / Bot:";
  typingEl.append(typingStrong, " লিখছে... / is typing...");
  log.appendChild(typingEl);
  log.scrollTop = log.scrollHeight;

  setTimeout(() => {
    const currentTyping = document.getElementById("typing");
    if (currentTyping) {
      currentTyping.remove();
    }

    const replyP = document.createElement("p");
    const replyStrong = document.createElement("strong");
    replyStrong.textContent = "🤖 বট / Bot:";

    const replyTimeEl = createTimestamp();

    const replies = [
      "চমৎকার! আমি আপনার বার্তাটি পেয়েছি। / Awesome! I have received your message.",
      "ধন্যবাদ বাংলাচ্যাটে বার্তা পাঠানোর জন্য! / Thank you for messaging on BanglaChat!",
      "আমি একটি সাহায্যকারী বট। আমি আপনার সাথে আছি! / I am a helpful bot. I am here with you!",
      "আপনার দিনটি শুভ হোক! / Have a wonderful day!",
      "যোগাযোগ করার জন্য ধন্যবাদ! / Thanks for reaching out!",
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    replyP.append(
      replyStrong,
      " ",
      replyTimeEl,
      " ",
      document.createTextNode(randomReply),
    );
    log.appendChild(replyP);
    log.scrollTop = log.scrollHeight;
  }, 1000);
});
