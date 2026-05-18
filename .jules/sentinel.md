## 2026-05-18 - CI Supply Chain Hardening
**Vulnerability:** GitHub Actions workflows using version tags and having overly permissive defaults, coupled with potential for CI breakage in uninitialized repository states.
**Learning:** Pinning actions to full-length commit SHAs and enforcing least-privilege permissions (`contents: read`) significantly reduces the risk of supply chain attacks. Implementing step-level `if` guards ensures CI stability during early project phases.
**Prevention:** Always pin GitHub Actions to SHAs, explicitly define job-level permissions, and use `hashFiles` guards to handle missing dependencies or manifests gracefully.
