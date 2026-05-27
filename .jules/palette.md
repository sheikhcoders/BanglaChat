## 2026-05-27 - Bilingual Documentation Accessibility
**Learning:** Using semantic HTML `<div>` tags with `lang` attributes (`lang="en"`, `lang="bn"`) in Markdown files is critical for bilingual documentation. It ensures that screen readers use the correct synthesized voice and pronunciation for each language, preventing confusing "accented" reading of non-primary languages.
**Action:** Always wrap non-primary language blocks in semantic tags with appropriate `lang` attributes in all public-facing documentation.

## 2026-05-27 - CI Resiliency for Repository Initialization
**Learning:** CI workflows must be guarded against uninitialized repository states (e.g., missing `package.json`). Without these guards, documentation-only changes can trigger failing build jobs, creating a poor contributor experience and wasting compute resources.
**Action:** Implement job-level `if: hashFiles('package.json') != ''` guards and `paths-ignore` for documentation in all Node.js projects.
