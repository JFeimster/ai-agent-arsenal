# Widget Skill Roadmap

> Source: JFeimster/ai-agent-library (skills/widget-skill-roadmap.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


## Objective

Build skills that make embedded calculators, Next.js tools, and static funnel widgets more useful, more trackable, and more monetizable.

A good widget skill does more than calculate. It explains the result, routes the CTA, captures attribution, and hands clean data to CRM or automation.

## P0 widget skills

1. Trucker Repair-to-Revenue Skill
2. Inventory Cash Crunch Skill
3. Contractor Job Float Skill
4. Widget CTA Router Skill
5. Lead Webhook Payload Skill

## P1 widget skills

- Widget Input Schema Skill
- Widget Result Explainer Skill
- UTM Capture Skill
- Embed Code Generator Skill
- PDF Export Skill
- Share Card Generator Skill
- Multi-Step Form Logic Skill
- Calculator Formula Spec Skill

## Recommended app integrations

- Vercel-hosted calculators
- Wix blog embeds
- partner iframe embeds
- lead magnet widgets
- vertical landing pages
- HubSpot/n8n webhook flows
- downloadable result reports

## Standard widget flow

```text
visitor lands on page
  -> enters data into widget
  -> skill validates inputs
  -> skill calculates or classifies result
  -> skill explains result in plain English
  -> skill routes CTA
  -> skill captures UTM/referral source
  -> skill sends clean payload to CRM/webhook
```

## Guardrails

- Clearly label estimates and assumptions.
- Do not imply guaranteed funding or results.
- Do not collect sensitive financial data unless the app has appropriate privacy controls.
- Keep formulas documented and reusable.
- Preserve partner attribution.
