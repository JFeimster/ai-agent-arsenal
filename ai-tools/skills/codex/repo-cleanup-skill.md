# Repo Cleanup Skill

Status: draft/proposed

## Purpose
Standardize small cleanup passes without drifting into broad refactors.

## Inputs
- cleanup goal
- approved file scope
- protected paths

## Outputs
- cleanup diff
- skipped items list
- follow-up recommendations

## Logic
1. Separate safe cleanup from risky restructuring.
2. Fix naming, duplication, and stale placeholders inside scope.
3. Document anything that should be deferred.

## Guardrails
- Do not delete imported or historical assets without approval.
- Leave unrelated untracked directories untouched.
