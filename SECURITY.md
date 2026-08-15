# Security Policy

## Reporting a Vulnerability

We take the security of BanglaChat seriously. If you discover a security vulnerability, please follow responsible disclosure practices:

1. **Do not** report security vulnerabilities through public GitHub issues or pull requests.
2. Email security vulnerability details directly to the project maintainers.
3. Include detailed steps to reproduce the issue, a proof of concept if available, and any potential mitigations.

## Security Practices

- **Supply Chain Security**: All CI/CD GitHub Actions are pinned to immutable 40-character commit SHAs.
- **Principle of Least Privilege**: Workflow permissions are strictly limited to `contents: read` by default.
- **Resource Protection**: Timeouts are enforced on CI/CD execution jobs to mitigate resource exhaustion attacks.
