# PR Review Skill

Status: draft/proposed

## Purpose
Review a pull request for correctness, regressions, and scope compliance.

## Inputs
- PR diff
- acceptance criteria
- touched file list

## Outputs
- findings ranked by severity
- open questions
- merge-readiness note

## Logic
1. Check for behavioral regressions and invalid assumptions.
2. Confirm the diff matches the stated scope.
3. Flag missing validation or tests.

## Guardrails
- Findings first.
- Do not hide uncertainty behind summary language.
