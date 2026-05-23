# Security Policy

## Supported Versions

The following versions of BanglaChat are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| < 1.0.0 | :white_check_mark: |

## Reporting a Vulnerability

We take the security of BanglaChat seriously. If you believe you have found a security vulnerability, please report it to us by following these steps:

1. **Do not open a public issue.**
2. Send an email to `security@example.com` (replace with actual contact) with a detailed description of the vulnerability.
3. Include steps to reproduce the issue, the potential impact, and any suggested fixes.

We will acknowledge your report within 48 hours and provide a timeline for resolution. Once the vulnerability is fixed, we will coordinate a public disclosure.

## Security Best Practices

We encourage all contributors to follow these security best practices:
- Keep dependencies updated.
- Use parameterized queries to prevent SQL injection.
- Sanitize user input to prevent XSS.
- Never commit secrets or API keys to the repository.
- Follow the principle of least privilege.
