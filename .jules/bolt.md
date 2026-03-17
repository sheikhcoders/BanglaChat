# Bolt's Performance Journal

## 2026-03-17 - Bootstrap Guard for CI Efficiency
**Learning:** CI workflows (like `node.js.yml` and `nextjs.yml`) trigger on every push but fail early and waste resources in uninitialized repositories lacking manifest files. Matrix jobs are particularly wasteful as they fail across multiple nodes for the same root cause (missing `package.json`).
**Action:** Implement a "Smart Pre-check Job" pattern. A lightweight first job evaluates the repository state. If `package.json` is missing AND no source code files (e.g., `src/`, `lib/`, `*.js`, `*.ts`) are detected, the job succeeds but signals subsequent jobs to skip. If source code exists but `package.json` is missing, it fails explicitly to prevent "silent failures". This maximizes efficiency without compromising visibility.
