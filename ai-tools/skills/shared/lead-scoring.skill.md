# Lead Scoring Skill

Status: draft/proposed

## Purpose
Assign a simple, explainable lead score for prioritization and routing.

## Inputs
- source channel
- industry
- contact completeness
- revenue or scale signal
- intent signal

## Outputs
- score band
- scoring reasons
- recommended next step

## Logic
1. Weight intent and completeness above vanity attributes.
2. Penalize missing contact data and weak fit signals.
3. Keep scoring interpretable for CRM handoff.

## Guardrails
- Do not imply a score is a credit or underwriting decision.
