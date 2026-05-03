## 2026-05-03 - [CI Hardening and Security Policy Initialization]
**Vulnerability:** CI workflows were using tags/versions for actions instead of SHAs, lacked job-level permissions, had no timeouts, and lacked a formal security policy.
**Learning:** Pinning actions to full-length commit SHAs provides cryptographic certainty of the code being executed. Minimal job-level permissions follow the principle of least privilege, and timeouts prevent runaway resource usage. A SECURITY.md file is essential for responsible disclosure.
**Prevention:** Always pin actions to SHAs, specify explicit minimal permissions, and include job timeouts in workflows. Maintain a clear security policy from project inception.
