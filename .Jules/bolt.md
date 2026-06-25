## 2026-06-25 - [CI Efficiency]
**Learning:** CI workflows in sparse or uninitialized repositories can be significantly optimized by ignoring documentation changes, terminating outdated runs, and skipping non-essential installation checks (audit/fund).
**Action:** Always implement `paths-ignore` for `README.md` and `.Jules/**`, enable `cancel-in-progress` for non-deployment workflows, and use `--no-audit --no-fund` flags with `npm ci` to reduce CI overhead.
