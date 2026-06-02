## 2026-06-02 - CI/CD Supply Chain Hardening
**Vulnerability:** Supply chain attacks via mutable GitHub Action tags and overly permissive GITHUB_TOKEN.
**Learning:** Using version tags (e.g., @v4) allows action maintainers (or attackers who compromise them) to update the code under the tag, potentially introducing malicious logic. Default GITHUB_TOKEN permissions are often broader than necessary.
**Prevention:** Pin all GitHub Actions to full 40-character commit SHAs. Explicitly define 'permissions: contents: read' at the job or workflow level to follow the principle of least privilege.
