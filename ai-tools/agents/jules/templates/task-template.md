---
title: "Jules Task Template"
slug: "jules-task-template"
agent_platform: "Jules"
category: "Coding Ops"
status: "active"
version: "1.0"
---

# Jules Task Template

## Source / Platform Note

Template for Jules-style repo and coding operations in `ai-agent-arsenal`.

## Usage

- Copy this template into a working task note.
- Fill all required fields before implementation.
- Keep constraints explicit to prevent scope drift.

## Template

```md
# Task Title

## Context
- Repository:
- Request source:
- Owner:

## Objective
- Primary goal:
- In-scope paths:
- Out-of-scope paths:

## Inputs
- Required files:
- Existing references:
- Open questions:

## Constraints
- Safety constraints:
- Naming conventions:
- Do-not-touch paths:

## Execution Plan
1. Inspect current state.
2. Define normalized target state.
3. Implement in small batches.
4. Verify with path checks and diff review.

## Acceptance Criteria
- [ ] Files are in correct canonical locations.
- [ ] Naming is normalized.
- [ ] Old duplicates/stale files are handled safely.
- [ ] No unrelated folders changed.

## Deliverables
- Files created:
- Files updated:
- Files removed:

## Verification
- Commands run:
- Manual checks:
- Risks remaining:
```
