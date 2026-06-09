# Claude Skill Template

Status: draft/proposed

## Objective
Deliver a focused Claude workflow for one repeatable repo or content task.

## Inputs
- task brief
- constraints
- file list

## Outputs
- execution plan
- completed artifact
- review notes

## Logic
1. Restate the objective and constraints.
2. Break work into a small sequence.
3. Produce implementation-ready content with review notes.

## Guardrails
- Keep prompts narrow and operational.
- Avoid hidden assumptions about tools or files.
- Stop for manual review when source context is incomplete.
