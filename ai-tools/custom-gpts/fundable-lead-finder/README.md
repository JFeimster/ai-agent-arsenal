# Fundable Lead Finder

Fundable Lead Finder is a Custom GPT / AI assistant package for identifying funding-ready local service businesses, scoring them as top-of-funnel opportunities, and generating practical, no-BS outreach for commercial finance teams.

It is built for brokers, funding affiliates, referral partners, and growth operators who need to turn messy business lists into prioritized outreach without sounding like a generic lender wearing a cheap suit.

## Purpose

Fundable Lead Finder helps users answer one core question:

> Which blue-collar service businesses are most likely worth a funding conversation right now, and what should we say to them?

The tool analyzes local service businesses, identifies likely or confirmed funding trigger events, assigns a 1-100 sales-opportunity score, and drafts concise outreach angles grounded in the business's industry, location, operating pressure, and available enrichment data.

This package is designed for prospecting and outreach prioritization. It is not underwriting, not a credit decision, and not a funding approval predictor.

## Target Users

- Business loan brokers
- Commercial finance advisors
- Funding affiliates and referral partners
- Partner enablement teams
- Local service business prospectors
- Clay, Apollo, Instantly AI, and CRM automation builders
- Operators building lead magnets or funding-intake workflows

## Target Lead Types

Fundable Lead Finder is focused on blue-collar and local service businesses, including:

- HVAC
- Roofing
- Plumbing
- Electrical
- General contracting
- Specialty trades
- Landscaping and lawn care
- Pest control
- Restoration and remediation
- Cleaning and janitorial services
- Moving companies
- Trucking and logistics
- Last-mile delivery
- Auto repair
- Towing
- Septic
- Concrete
- Paving
- Excavation
- Tree service

By default, the tool excludes broad ecommerce, SaaS, agencies, creator businesses, white-collar professional services, passive holding companies, and consumer borrowers unless the user explicitly asks to adapt the framework.

## Core Use Cases

- Score sourced lead lists for funding outreach priority.
- Analyze Clay/Apollo enriched business records.
- Generate trigger-based cold email, SMS, or LinkedIn DM angles.
- Convert local service business data into CRM-ready fields.
- Identify likely funding product fit: equipment, fleet, receivables bridge, payroll buffer, materials funding, working capital, fuel-cost buffer, or project capital.
- Flag obvious prospecting red flags before wasting broker time.
- Create training examples for funding affiliates and partner teams.
- Support lead magnet workflows for brokers and finance operators.

## Inputs

Typical inputs include:

- Business name
- Industry / niche
- Location, usually city and state
- Website or Google Business Profile notes
- Reviews or reputation snippets
- Hiring data or job posts
- Service pages or company description
- Fleet, equipment, or licensing clues
- Recent news, expansion, or rebrand notes
- CRM notes or enrichment data
- Optional revenue or years-in-business context when available

The GPT should never require all fields before producing an output. When enrichment is missing, it should make disciplined industry-based assumptions and label them with language like `likely`, `possible`, `typical`, or `worth checking`.

## Standard Output

The canonical output format is:

1. **Research Summary** — 2-3 sentence business overview using supplied facts and clearly labeled assumptions.
2. **Trigger Event Analysis** — confirmed and likely funding triggers relevant to the industry.
3. **Fundability Score (1-100)** — aggressive top-of-funnel sales-opportunity score, not underwriting.
4. **Personalized Outreach Angle** — under 75 words, peer-toned, practical, and tied to one funding angle.

For CRM, Clay, Apollo, or batch workflows, the output can also be mapped into fields such as:

- Research Summary
- Trigger Events
- Trigger Confidence
- Fundability Score
- Score Band
- Score Reason
- Recommended Funding Product
- Outreach Angle
- CTA
- Red Flags
- Assumptions Used
- Source Notes

## Package Map

```txt
ai-tools/custom-gpts/fundable-lead-finder/
  README.md
  gpt-instructions.md
  system-instructions.md
  prompt-pack.md
  tool-profile.md
  tool-manifest.json
  changelog.md

  docs/
    automation-and-integration-notes.md
    compliance-notes.md
    repo-notes.md
    use-cases.md

  knowledge/
    README.md
    approved-outreach-examples.md
    bad-outreach-examples.md
    disqualification-and-red-flags.md
    fundability-scoring-rubric.md
    funding-product-fit-matrix.csv
    industry-trigger-event-matrix.csv
    lead-enrichment-interpretation-guide.md
    outreach-voice-and-style-guide.md
    sample-lead-analyses.md

  schemas/
    lead-intake.schema.json
    lead-score.schema.json

  landing-page/
    README.md
    index.html
    styles.css
    script.js
    metadata.json
```

## Key Files

| File | Purpose |
|---|---|
| `gpt-instructions.md` | Canonical polished GPT instructions. |
| `system-instructions.md` | Preserved source-style system prompt from the Notion concept. |
| `prompt-pack.md` | Reusable prompts for scoring, outreach, batch processing, and CRM extraction. |
| `tool-manifest.json` | Package-level metadata for cataloging and future automation. |
| `knowledge/README.md` | Explains the knowledge layer and how each reference file should be used. |
| `docs/automation-and-integration-notes.md` | Clay, Apollo, Instantly AI, and CRM workflow guidance. |
| `docs/compliance-notes.md` | Guardrails for compliant prospecting language. |
| `landing-page/` | Static marketing page for the tool. |

## Scoring Philosophy

The fundability score is intentionally sales-opportunity focused. It rewards:

- Capital-intensive industries
- Hiring sprees
- Fleet or equipment needs
- Seasonal demand spikes
- Service-area expansion
- New locations
- Large contracts
- Storm/restoration demand
- Receivables delays
- Payroll, fuel, materials, insurance, and project-cash timing pressure

It penalizes only obvious prospecting deal-killers, such as:

- Closed or inactive business
- Brand-new operator with no traction
- Nonexistent digital footprint
- Severe reputation issues
- Bankruptcy, fraud, closure, or nonpayment mentions
- Irrelevant industry

Do not use the score as a lending decision. It is a prioritization signal for outreach and enrichment.

## Outreach Voice

The voice should be gritty, direct, practical, and peer-like.

Good outreach sounds like:

> Saw you're adding HVAC techs heading into peak season. That kind of growth usually means payroll, parts, and trucks hit before the new revenue catches up. I help service businesses compare working-capital or equipment options without the bank runaround. Worth a quick look?

Avoid:

- Banker-speak
- Fake urgency
- Generic “business financing” pitches
- Guaranteed approval claims
- Over-polished corporate language
- Invented facts about the business
- Outreach that implies the business is struggling

## Compliance Boundaries

Fundable Lead Finder must not:

- Approve or deny financing
- Predict lender approval
- Claim a business qualifies without verification
- State rates, terms, amounts, or eligibility unless supplied by a verified source
- Invent facts, news, revenues, fleet size, job posts, or funding history
- Use protected-class assumptions or sensitive personal data
- Give legal, tax, accounting, or credit advice

All enrichment data should be treated as unverified until confirmed by the user or a legitimate source.

## Automation Notes

This package is designed to work in:

- **Clay** — AI column for scoring enriched business rows.
- **Apollo** — first-line and outreach-angle generation.
- **Instantly AI** — sequence personalization fields.
- **HubSpot / CRM** — lead scoring and custom-field enrichment.
- **Static landing pages** — lead magnet or tool preview experience.
- **Future GPT Actions / API workflows** — structured input/output schemas are included as the foundation.

## Public-Safe Positioning

Use this language when describing the tool publicly:

> Fundable Lead Finder helps brokers and finance teams prioritize local service business prospects by identifying likely funding triggers, scoring top-of-funnel opportunity, and generating practical outreach angles.

Avoid positioning it as:

- An underwriting tool
- A credit approval model
- A lender decision engine
- A guaranteed funding checker

## Status

Current package status: **v0.2 / Notion-grounded starter package**

The core instruction, prompt, schema, compliance, knowledge, and landing-page layers are present. Batch 2 enhancements may include deeper regional trigger notes, expanded product-fit logic, Action/OpenAPI schemas, CRM implementation docs, and additional outreach variant banks.

## Source Reference

Notion source: https://myfunding.notion.site/Fundable-Lead-Finder-GPT-fe3e846e4af741b3b7bee3cb2b9f11bb
