# 🎨 Pull Request Template

## 💡 What

<!-- Describe the UX enhancement or feature added -->

## 🎯 Why

<!-- Explain the user problem solved or the benefit of this change -->

## ♿ Accessibility Checklist

- [ ] **Semantic HTML**: Using correct tags (`<button>`, `<label>`, `<nav>`, etc.)
- [ ] **ARIA Labels**: Added `aria-label` to icon-only buttons or interactive elements
- [ ] **Keyboard Navigation**: Verified tab order and focus-visible indicators
- [ ] **Color Contrast**: Checked text and interactive element contrast (WCAG AA/AAA)
- [ ] **Screen Reader Support**: Tested with a screen reader (or verified ARIA structure)
- [ ] **Decorative Elements**: Added `aria-hidden="true"` to purely decorative icons/emojis

## 📸 Before/After

<!-- Screenshots or GIFs of the visual changes (if applicable) -->

## 🔬 Verification

- [ ] `pnpm lint` passed
- [ ] `pnpm test` passed
- [ ] Verified manually on various screen sizes
