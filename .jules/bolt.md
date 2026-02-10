## 2025-02-10 - CI Path Filtering for Content-Driven Apps
**Learning:** In Next.js or other content-driven frameworks, `.md` files often represent the application's data. Excluding them from CI/CD triggers via `paths-ignore` can lead to stale production builds where content updates are never deployed.
**Action:** Before applying global file type ignores in CI, analyze if those file types are part of the application's source or content (e.g., Markdown for blogs, JSON for config).
