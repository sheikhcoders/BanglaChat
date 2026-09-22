# Security Policy / নিরাপত্তা নীতি

## Reporting a Vulnerability / নিরাপত্তা ত্রুটি রিপোর্ট করা

If you discover a security vulnerability in BanglaChat, please do NOT create a public issue.
আপনার যদি BanglaChat-এ কোনো নিরাপত্তা সমস্যা বা ত্রুটি নজরে আসে, অনুগ্রহ করে সরাসরি কোনো পাব্লিক ইস্যু (Public Issue) তৈরি করবেন না।

Please report security issues confidentially to the maintainers.
অনুগ্রহ করে নিরাপত্তার বিষয়গুলো গোপনীয়ভাবে মেইনটেইনারদের নিকট রিপোর্ট করুন।

## Security Guidelines / নিরাপত্তা নির্দেশিকা

- **Least Privilege**: Always request minimal permissions needed.
- **Input Validation**: All inputs must be sanitized and validated.
- **Dependencies**: Keep action versions pinned to immutable full commit SHAs.
- **No Secrets**: Never commit tokens, credentials, or API keys to the repository.
