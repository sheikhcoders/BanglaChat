# Security Policy / নিরাপত্তা নীতি

## Reporting a Vulnerability / সিকিউরিটি সমস্যা রিপোর্ট করুন

We take security seriously. If you discover a security vulnerability, please do NOT create a public issue.

আমরা নিরাপত্তাকে গুরুত্ব সহকারে দেখি। আপনি যদি কোনো নিরাপত্তা ত্রুটি পান, অনুগ্রহ করে প্রকাশ্যে ইস্যু খুলবেন না।

Please report any security concerns privately to the repository maintainers or via responsible disclosure.

অনুগ্রহ করে কোনো নিরাপত্তা সংক্রান্ত সমস্যা গোপনীয়ভাবে মেইনটেইনারদের জানান।

## Supported Versions / সমর্থিত সংস্করণ

| Version | Supported          |
| ------- | ------------------ |
| Main    | :white_check_mark: |

## Security Best Practices / নিরাপত্তা নির্দেশিকা

- Least Privilege: Workflows operate with `permissions: contents: read`.
- Immutable Dependencies: Third-party GitHub Actions are pinned to explicit commit SHAs.
- No Credentials Persistence: `persist-credentials: false` is configured on repository checkout.
