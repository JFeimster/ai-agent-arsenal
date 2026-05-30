# Structure Cleanup Notes

Follow-up cleanup on branch `codex/simplify-structure-directory-ai-tools-showcase` for PR #14.

## Moved from `content/`

- `content/tools/*` -> `ai-tools/tool-profiles/*`
- `content/playbooks/*` -> `ai-tools/playbooks/*`
- `content/prompt-systems/*` -> `ai-tools/prompt-systems/*`
- `content/calculators/*` -> `ai-tools/calculators/content-notes/*`
- `content/landing-pages/*` -> `ai-tools/templates/landing-pages/*`
- `content/case-studies/*` -> `ai-tools/case-studies/*`

## Moved from `canonical/`

- `canonical/**` -> `docs/manual-review/canonical/**`

Reason:
- Canonical files were placeholder route notes for a future canonical model and were not clearly approved as directory production assets, showcase builds, or tool source packages in this batch.

## Manual Review Placement

- `docs/manual-review/canonical/**` contains the former canonical placeholders pending explicit product decision on whether they become:
  - directory site routes, or
  - showcase concepts, or
  - docs-only references.

## Root Cleanup Confirmation

- Root `content/` no longer exists.
- Root `canonical/` no longer exists.
- Root `agents/`, `skills/`, `variants/`, `examples/`, and `archive/` do not exist.

## Data Safety Confirmation

- No files were intentionally deleted without being moved or documented.
- No `.env`, `node_modules`, lockfiles, or build artifacts were added.
