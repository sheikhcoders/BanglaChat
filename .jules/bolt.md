## 2025-05-15 - Balancing CI Optimization with Status Checks

**Learning:** Using `paths-ignore` for documentation or other non-code files in workflows that are configured as required status checks in GitHub can block Pull Requests from being merged. Even if the changes are documentation-only, the required checks will never trigger and thus never pass.

**Action:** Avoid top-level `paths-ignore` for common files like `**.md` in CI workflows that might be used as required status checks. Instead, use job-level `if` guards or targeted `paths-ignore` for truly internal/non-critical directories like `.jules/**`.
