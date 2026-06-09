# File Normalization Skill

Status: draft/proposed

## Purpose
Normalize filenames, folder intent, and starter content without destructive moves.

## Inputs
- target file set
- naming convention
- safety constraints

## Outputs
- normalized content updates
- rename recommendations
- unresolved path risks

## Logic
1. Prefer content-level normalization first.
2. Only recommend renames when cross-file impact is low and approved.
3. Record ambiguous path history for manual review.

## Guardrails
- Do not move files in batches that only allow content edits.
