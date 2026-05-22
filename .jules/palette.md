# Palette's UX Journal 🎨

## 2026-05-22 - [Bilingual Accessible README Pattern]
**Learning:** In uninitialized repositories where documentation is the primary interface, a bilingual (English/Bengali) foundation using semantic HTML and localized 'lang' attributes ensures immediate accessibility and an inclusive entry point. Using `<p lang="bn">` or `<span lang="bn">` allows screen readers to correctly switch pronunciation.
**Action:** Always implement a bilingual welcome in README.md for BanglaChat using proper HTML lang attributes when starting or recovering a repository.

## 2026-05-22 - [CI Resilience for Uninitialized State]
**Learning:** CI workflows (like Node.js or Next.js) often fail in uninitialized repositories because they expect `package.json` or lockfiles. Adding job-level `if: hashFiles('package.json') != ''` guards and `paths-ignore` for documentation allows the repository to exist in a valid state before the first `npm init`.
**Action:** Coordinate with Bolt/Sentinel to ensure CI guards are in place when performing early-stage UX/documentation work.
