## 2026-06-29 - CI Workflow Hardening and Supply Chain Security
**Vulnerability:** Over-permissive default GitHub Action permissions and usage of mutable tags for external actions.
**Learning:** Default GITHUB_TOKEN permissions are often overly permissive (write access). Using mutable tags like @v4 exposes the pipeline to supply chain attacks if the tag is pointed to a malicious commit.
**Prevention:** Always set global 'permissions: contents: read' and pin actions to verified commit SHAs. Use 'timeout-minutes' to prevent resource exhaustion.
