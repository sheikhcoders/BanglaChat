## 2026-05-22 - Bootstrap-Aware CI Workflows

**Learning:** CI workflows in early-stage repositories often fail because they expect manifests (like `package.json`) that don't exist yet. Simply adding `if` guards on steps based on file existence can lead to "silent failures" if the repo matures and those files are accidentally deleted.
**Action:** Use "Bootstrap-aware" detection steps. These steps should:

1. Detect the presence of package manifests.
2. If missing, check for the presence of code directories (e.g., `src/`, `app/`).
3. Fail loudly (`exit 1`) if code exists but manifests are missing (broken state).
4. Skip gracefully (output `found=false`) if neither exists (uninitialized state).
5. Subsequent steps should then use `if: steps.detect.outputs.found == 'true'`.
   This pattern ensures CI passes during the bootstrap phase but correctly enforces project structure once development begins.
