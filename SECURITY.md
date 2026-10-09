# Security Policy / নিরাপত্তা নীতি

## Reporting a Vulnerability / নিরাপত্তা সমস্যা রিপোর্ট করা

If you discover a security vulnerability within BanglaChat, please report it responsibly instead of opening a public GitHub issue.

আপনি যদি বাংলাচ্যাট-এ কোনো নিরাপত্তা সমস্যা খুঁজে পান, তবে অনুগ্রহ করে এটি প্রকাশ্য গিটহাব ইস্যুতে না খুলে দায়িত্বশীলভাবে জানান।

### Reporting Guidelines / যোগাযোগের নির্দেশিকা

- Email security issues or concerns to the maintainers.
- Do not disclose details publicly until a fix has been released.
- Provide step-by-step instructions or proof-of-concept to help reproduce the issue.

- যেকোনো নিরাপত্তা সমস্যা মেইনটেইনারদের সাথে যোগাযোগ করে জানান।
- সমস্যা সমাধানের আগে প্রকাশ্যে এর বিবরণ প্রকাশ করবেন না।
- সমস্যাটির পুনরাবৃত্তি করতে সহায়ক পদক্ষেপ বা বিস্তারিত তথ্য প্রদান করুন।

## Security Best Practices / নিরাপত্তা সেরা অনুশীলন

- Top-level `permissions: contents: read` enforced on CI workflows.
- Action SHA pinning applied for supply chain protection.
- No secrets or credentials in repository source code.
