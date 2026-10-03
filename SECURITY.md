# Security Policy / নিরাপত্তা নীতি

## Reporting a Vulnerability / নিরাপত্তা ক্রুটি সম্পর্কে জানান

We take the security of **BanglaChat** seriously. If you discover a security vulnerability, please do NOT create a public issue.

আমরা **BanglaChat**-এর নিরাপত্তাকে অত্যন্ত গুরুত্ব সহকারে বিবেচনা করি। আপনি যদি কোনো নিরাপত্তা ত্রুটি (vulnerability) দেখতে পান, অনুগ্রহ করে কোনো পাবলিক ইস্যু (public issue) তৈরি করবেন না।

Please report security vulnerabilities responsibly by emailing the project maintainers or creating a Private Security Advisory on GitHub.

অনুগ্রহ করে প্রকল্প রক্ষণাবেক্ষণকারীদের ইমেইল করে বা গিটহাব-এ প্রাইভেট সিকিউরিটি অ্যাডভাইজরি তৈরি করে দায়িত্বশীলভাবে নিরাপত্তা ত্রুটি সম্পর্কে জানান।

## Security Best Practices / নিরাপত্তা নির্দেশিকা

- **Least Privilege**: Workflows run with minimal read-only permissions (`permissions: contents: read`).
- **Supply Chain Security**: Third-party GitHub Actions are pinned to full length commit SHAs.
- **Fail Securely**: Applications fail securely without exposing sensitive traces or credentials.
