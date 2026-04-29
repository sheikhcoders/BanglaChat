## 2026-04-28 - Supply Chain Hardening
**Vulnerability:** Pinning actions to mutable tags (like @v4) allows for potential supply chain attacks if a tag is moved to a malicious commit.
**Learning:** Pinning to full-length commit SHAs provides cryptographic certainty of the code being executed.
**Prevention:** Always use full SHAs for third-party actions and define explicit, minimal permissions for the GITHUB_TOKEN.
