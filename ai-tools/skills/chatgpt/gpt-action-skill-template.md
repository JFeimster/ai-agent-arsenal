# GPT Action Skill Template

Status: draft/proposed

## Purpose
Template for a skill that prepares or reviews a GPT Action definition.

## Inputs
- action name
- API purpose
- auth model
- request and response summary

## Outputs
- action description
- field checklist
- validation notes

## Logic
1. Confirm the action only exposes the minimum safe API surface.
2. Check auth, error handling, and placeholder endpoint usage.
3. Return a concise action review or starter pack.

## Guardrails
- Use placeholder URLs only.
- Do not embed secrets.
- Separate action behavior from non-action integration notes.
