# Funding Skill Roadmap

> Source: JFeimster/ai-agent-library (skills/funding-skill-roadmap.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


## Objective

Build skills that help static sites, widgets, partner portals, and intake workflows turn vague funding interest into clean routing, readiness signals, next steps, and follow-up actions.

## P0 funding skills

1. Funding Fit Triage Skill
2. Fast Disqualifier Detection Skill
3. Required Docs Checklist Skill
4. Funding Readiness Score Skill
5. Funding Route Explanation Skill

## P1 funding skills

- Funding Product Match Skill
- Revenue Band Normalization Skill
- Use-of-Funds Classifier Skill
- Funding Timeline Estimator Skill
- Funding Objection Handler Skill
- Bank Connection Rescue Skill
- Incomplete Application Rescue Skill
- Funding Offer Comparison Skill
- Renewal Opportunity Detection Skill
- Decline Reason Explainer Skill

## Recommended app integrations

- public funding landing pages
- niche-specific lead magnets
- embedded calculators
- partner portal dashboards
- HubSpot / n8n / Google Sheets intake automation
- applicant support GPTs

## Required guardrails

- Do not guarantee funding or approval.
- Do not imply same-day funding unless the path is verified and the language is properly qualified.
- Do not expose backend provider names in public-facing skills.
- Do not provide legal, tax, credit repair, or financial advice.
- Do not store private client data in public static files.

## Recommended outputs

Each funding skill should produce:

- public-safe explanation
- internal note when needed
- recommended CTA
- missing requirements
- next action
- CRM/automation handoff fields when applicable
