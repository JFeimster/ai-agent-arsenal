# Directory Entry Normalizer Skill

Status: draft/proposed

## Purpose
Normalize directory listing content into a consistent card-ready structure.

## Inputs
- raw entry content
- category options
- tagging rules

## Outputs
- normalized title
- short description
- category recommendation
- tag suggestions

## Logic
1. Remove fluff and duplicate phrasing.
2. Keep descriptions brief and operational.
3. Flag uncertain categories as manual-review.

## Guardrails
- Do not invent unsupported capabilities or integrations.
