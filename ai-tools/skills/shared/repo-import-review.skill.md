# Repo Import Review Skill

Status: draft/proposed

## Purpose
Review imported repository assets before relocation, normalization, or registry updates.

## Inputs
- source asset path
- destination proposal
- registry or index references

## Outputs
- import review note
- path verification result
- safe next-step recommendation

## Logic
1. Confirm current source path from registries or source indexes.
2. Distinguish imported source assets from platform-specific overlays.
3. Recommend move, preserve, or manual-review.

## Guardrails
- Do not move imported assets on assumption alone.
- Use `data/registries/agent-registry.json` and `data/source-indexes/` as verification inputs when available.
