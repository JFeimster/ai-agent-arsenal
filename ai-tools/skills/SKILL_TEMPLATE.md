# Skill Template

> Source: JFeimster/ai-agent-library (skills/SKILL_TEMPLATE.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


Use this template for every Agent Skill added to the library.

```yaml
---
name: Example Skill
slug: example-skill
category: funding
audience:
  - affiliate partners
  - referral partners
  - SMB owners
problem_solved: One-sentence explanation of the painful job this skill solves.
inputs_required:
  - input one
  - input two
outputs:
  - output one
  - output two
guardrails:
  - Do not guarantee funding or approval.
  - Do not expose backend provider names.
  - Do not provide legal, tax, credit repair, or financial advice.
recommended_apps:
  - static landing pages
  - Next.js widgets
  - embedded calculators
  - partner portals
integration_notes:
  - Can feed HubSpot deal stage.
  - Can route CTA to apply, book call, download guide, or partner handoff.
monetization_angle: Explain how this skill supports lead capture, partner enablement, paid diagnostics, or productized services.
---
```

## Required sections

## Purpose
Explain what the skill does and why it exists.

## Inputs
List the minimum fields needed.

## Outputs
List the outputs the skill should reliably produce.

## Logic
Describe the decision framework, scoring rules, or transformation process.

## Guardrails
Document public-facing safety rules and internal-only limits.

## Example prompt
Provide a short prompt that activates the skill.

## App integration notes
Explain where this belongs: static site, Next.js app, widget, CRM workflow, partner portal, or GPT/agent.
