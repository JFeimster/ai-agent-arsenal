# Agent Skills Library

> Source: JFeimster/ai-agent-library (skills/README.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


This folder defines modular Agent Skills for Moonshine Capital apps, static sites, Next.js tools, embedded widgets, partner portals, referral funnels, and strategic partner enablement.

These skills are designed to be portable building blocks. A skill should do one job well: triage a lead, explain a result, route a CTA, generate partner copy, map CRM fields, detect risky claims, or turn widget inputs into next actions.

## Intended users

- affiliate partners
- referral partners
- CPAs and bookkeepers
- business brokers and M&A advisors
- real estate investors
- ecommerce sellers
- trucking/logistics operators
- local referral partners
- internal Moonshine Capital operators

## Recommended structure

```text
skills/
  README.md
  SKILL_TEMPLATE.md
  skill-index.json
  top-25-build-priority.md
  widget-skill-roadmap.md
  partner-skill-roadmap.md
  funding-skill-roadmap.md

  funding/
  business-credit/
  partner-enablement/
  referral-partners/
  cpa-partner-tools/
  business-broker-tools/
  widget-tools/
  landing-pages/
  crm-ops/
  compliance/
```

## Skill categories

- `funding` — funding triage, readiness, docs, routing, rescue, and offer explanation
- `business-credit` — fundability, utilization, vendor tiers, entity hygiene, banking stack
- `partner-enablement` — partner onboarding, game plans, commissions, scripts, resources
- `referral-partners` — CPA, broker, consultant, and strategic referral workflows
- `cpa-partner-tools` — tax-time capital, bookkeeping signals, advisory upsells
- `business-broker-tools` — acquisition funding, post-close capital, seller financing, buyer readiness
- `widget-tools` — calculator logic, result explainers, CTA routing, embed support
- `landing-pages` — funnel routing, page audits, FAQ/schema, CTA personalization
- `crm-ops` — lead scoring, field mapping, stages, follow-up, dedupe, attribution
- `compliance` — public claims, disclosures, disclaimers, white-label language, sensitive data review

## Guardrails

- Do not guarantee funding or approval.
- Do not expose backend funding providers in public-facing skills unless explicitly approved.
- Do not provide legal, tax, credit repair, or financial advice.
- Do not include private client data, secrets, credentials, API keys, or sensitive bank data.
- Keep internal routing logic separate from prospect-facing copy.

## Build priority

Start with the P0 skills in [`top-25-build-priority.md`](top-25-build-priority.md). These power the money path: traffic → widget → lead → triage → partner/referral routing → CRM → follow-up.
