---
title: "Jules Repo Cleanup Playbook"
slug: "jules-repo-cleanup-playbook"
agent_platform: "Jules"
category: "Coding Ops"
status: "active"
version: "1.0"
---

# Jules Repo Cleanup Playbook

## Source / Platform Note

Operational playbook for safe repository cleanup in Jules-driven workflows.

## When To Use

- Duplicate folders or mirrored content exist.
- Folder naming is inconsistent with canonical standards.
- Stale placeholder files block reliable implementation.
- Path drift causes docs-to-code mismatches.

## Cleanup Principles

- Preserve source-of-truth layers.
- Propose changes in explicit, reviewable batches.
- Prefer moves/renames over destructive deletion.
- Delete only after replacement paths are verified.
- Keep unrelated folders untouched.

## Default Workflow

1. Inventory
- List target folder tree and recent edits.
- Identify duplicates, deprecated paths, and collisions.

2. Classify
- Keep: canonical paths and active content.
- Migrate: useful content in non-canonical paths.
- Remove: stale files replaced by normalized targets.

3. Plan Batches
- Batch each change by concern such as docs, templates, playbooks, and agent specs.
- Include rollback notes for each batch.

4. Execute
- Create normalized destination files first.
- Move or merge useful content.
- Remove stale files after confirming destination parity.

5. Verify
- Validate expected paths.
- Confirm removed files are no longer referenced.
- Confirm no unrelated top-level folders changed.

## Output Format

```md
## Completed
- Files created:
- Files updated:
- Files deleted:

## Verification
- Required paths:
- Removed legacy paths:
- Unrelated folders untouched:

## Notes / Manual Review
- Risks:
- Follow-up tasks:
```

## Safety Rules

- Never modify out-of-scope folders.
- Never delete content before creating verified replacements.
- Never invent APIs, links, or product claims.
- Always report uncertainties explicitly.

## Success Criteria

- Canonical structure is enforced.
- Useful content is preserved and improved.
- Legacy duplicates are removed only after migration.
- Final diff is tightly scoped to intended cleanup targets.
