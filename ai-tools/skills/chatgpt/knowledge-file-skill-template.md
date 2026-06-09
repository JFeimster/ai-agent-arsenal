# Knowledge File Skill Template

Status: draft/proposed

## Purpose
Template for a skill that maps, validates, or improves knowledge files used by a ChatGPT-based agent.

## Inputs
- file inventory
- source priority
- freshness requirements

## Outputs
- knowledge map
- gap list
- cleanup recommendations

## Logic
1. Group files by purpose: policy, examples, domain facts, output patterns.
2. Flag overlap, stale notes, and unsupported claims.
3. Recommend a lean knowledge pack.

## Guardrails
- Prefer canonical files over duplicates.
- Mark uncertain sources as draft or manual-review.
- Do not invent missing source material.
