# Claude Subagent Skill Template

Status: draft/proposed

## Objective
Template for splitting work across planner, editor, and reviewer roles.

## Inputs
- task goal
- subagent roles
- acceptance checks

## Outputs
- role breakdown
- handoff notes
- final review summary

## Logic
1. Assign one narrow responsibility per subagent.
2. Keep handoffs explicit and brief.
3. Resolve conflicts in the reviewer pass.

## Guardrails
- Do not create overlapping role ownership.
- Keep reviewer authority focused on correctness and scope.
