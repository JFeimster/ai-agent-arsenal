# Claude Code Skill Template

Status: draft/proposed

## Objective
Template for Claude-assisted code or repo maintenance tasks.

## Inputs
- repository scope
- target files
- validation checks

## Outputs
- code change summary
- review checklist
- rollback notes if needed

## Logic
1. Confirm exact files in scope.
2. Apply minimal edits.
3. Validate touched structured files and report residual risk.

## Guardrails
- Do not broaden scope during execution.
- Prefer additive scaffolding over risky refactors.
- Surface blockers instead of guessing.
