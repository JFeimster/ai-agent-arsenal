# Custom GPT Skill Template

Status: draft/proposed

## Purpose
Reusable template for a skill that supports a Custom GPT build or operating flow.

## Inputs
- GPT objective
- target audience
- allowed tools/actions
- required knowledge files

## Outputs
- scoped instruction block
- setup checklist
- validation prompts

## Logic
1. Confirm the GPT's primary job and refusal boundaries.
2. Map required knowledge files and actions.
3. Produce concise operating instructions and test prompts.

## Guardrails
- Keep the GPT focused on one operating role.
- Avoid broad tool permissions by default.
- Mark missing dependencies as manual-review.

## Example prompt
Build a Custom GPT skill pack for a repo triage assistant with optional action hooks and a small knowledge base.
