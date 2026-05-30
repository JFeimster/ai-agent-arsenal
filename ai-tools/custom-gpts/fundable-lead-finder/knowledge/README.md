# Fundable Lead Finder Knowledge Layer

This folder contains the reference material that makes Fundable Lead Finder consistent, specific, and useful across manual GPT use, Clay/Apollo enrichment, CRM scoring, and future agent/API workflows.

The knowledge layer exists so the GPT does not merely “write nice outreach.” It gives the tool an operator-grade brain: how to score leads, what signals matter by trade, what funding products fit which operating pressures, what language sounds human, and which leads should be suppressed before a broker wastes time.

## Purpose

Use these files to standardize how Fundable Lead Finder:

- Scores blue-collar and local service businesses from 1-100.
- Interprets funding trigger events by industry.
- Maps business situations to likely funding product angles.
- Writes practical outreach that sounds like a peer, not a banker.
- Identifies red flags, disqualifiers, and human-review cases.
- Interprets enrichment data from websites, reviews, job posts, CRM notes, and public business profiles.
- Produces repeatable examples for training, QA, and prompt testing.

## Core Knowledge Files

| File | Purpose | Usage Priority |
|---|---|---:|
| `fundability-scoring-rubric.md` | Defines the 1-100 top-of-funnel sales-opportunity scoring model. | High |
| `industry-trigger-event-matrix.csv` | Maps trades to likely capital triggers, funding angles, hooks, and red flags. | High |
| `funding-product-fit-matrix.csv` | Connects operating pressure to likely funding product fit and outreach framing. | High |
| `outreach-voice-and-style-guide.md` | Defines the no-BS voice, message structure, banned phrases, and CTA style. | High |
| `approved-outreach-examples.md` | Provides model outreach examples by trade and trigger event. | High |
| `bad-outreach-examples.md` | Shows generic, risky, spammy, or noncompliant outreach patterns to avoid. | High |
| `crm-field-mapping-guide.md` | Maps GPT outputs into Clay, Apollo, Instantly AI, and CRM fields. | High |
| `lead-enrichment-interpretation-guide.md` | Explains how to interpret websites, reviews, job posts, service pages, fleet clues, and public profiles. | High |
| `disqualification-and-red-flags.md` | Defines hard DQs, score penalties, human-review triggers, and safe phrasing. | High |
| `sample-lead-analyses.md` | Provides fully worked examples of the canonical 4-part output. | High |

## Recommended Read Order

For a human operator reviewing or improving the tool, read the files in this order:

1. `fundability-scoring-rubric.md`
2. `disqualification-and-red-flags.md`
3. `industry-trigger-event-matrix.csv`
4. `funding-product-fit-matrix.csv`
5. `outreach-voice-and-style-guide.md`
6. `approved-outreach-examples.md`
7. `bad-outreach-examples.md`
8. `lead-enrichment-interpretation-guide.md`
9. `crm-field-mapping-guide.md`
10. `sample-lead-analyses.md`

This order moves from logic → guardrails → industry context → product fit → messaging → implementation.

## How the Knowledge Files Work Together

### 1. Scoring

Start with `fundability-scoring-rubric.md`.

The score is a sales-opportunity score. It should answer:

> Is this business worth prioritizing for a funding conversation?

It is not a credit model, underwriting engine, lender-matching decision, or approval prediction.

### 2. Red-Flag Filtering

Use `disqualification-and-red-flags.md` before writing outreach.

Some leads should not receive outreach at all, such as closed businesses, clear out-of-scope companies, or entities with severe confirmed red flags. Other leads may remain viable but receive a lower score or human-review note.

### 3. Industry Trigger Analysis

Use `industry-trigger-event-matrix.csv` to identify likely capital triggers by trade.

Examples:

- HVAC: seasonal demand, technician hiring, truck repairs, parts inventory.
- Roofing: storm season, materials, crews, insurance receivables.
- Trucking: fuel, repairs, driver hiring, delayed receivables.
- Restoration: emergency demand, insurance payments, drying equipment, payroll.

When no enrichment is provided, triggers must be framed as likely, possible, typical, or worth checking.

### 4. Funding Product Fit

Use `funding-product-fit-matrix.csv` to connect operating pressure to a plausible funding angle.

Examples:

- Trucks or vans → fleet financing / fleet repair capital.
- Materials before payment → materials funding / project working capital.
- Insurance receivables → receivables bridge.
- Hiring crews → payroll buffer / working capital.
- Seasonal ramp → seasonal working capital.

The GPT should never say a product is guaranteed or definitively available. Use language like “may fit,” “could be worth reviewing,” or “possible angle.”

### 5. Outreach Voice

Use `outreach-voice-and-style-guide.md` to keep the message short, direct, and specific.

The outreach angle should usually be under 75 words and follow this structure:

1. Mention the trigger or operational pressure.
2. Show practical understanding of the trade.
3. Offer one relevant funding angle.
4. End with one low-friction CTA.

### 6. Examples and QA

Use `approved-outreach-examples.md` and `sample-lead-analyses.md` to test whether new GPT outputs match the intended quality bar.

Use `bad-outreach-examples.md` to catch outputs that sound generic, overhyped, risky, or fake.

## Canonical Output Structure

Unless the user requests a specific subsection only, Fundable Lead Finder should output:

```md
### 1. Research Summary

### 2. Trigger Event Analysis

### 3. Fundability Score (1-100)

### 4. Personalized Outreach Angle
```

For batch workflows, repeat the same structure for each business and keep outputs clearly separated.

## Automation Use

These knowledge files are useful for:

- Manual Custom GPT reference uploads.
- Clay AI columns.
- Apollo personalization workflows.
- Instantly AI sequence fields.
- HubSpot or CRM custom scoring fields.
- Batch CSV enrichment.
- Future no-auth tools or API endpoints.
- Training funding affiliates and referral partners.

## File Naming Convention

The repo uses kebab-case filenames:

```txt
fundability-scoring-rubric.md
industry-trigger-event-matrix.csv
funding-product-fit-matrix.csv
outreach-voice-and-style-guide.md
approved-outreach-examples.md
bad-outreach-examples.md
disqualification-and-red-flags.md
sample-lead-analyses.md
```

The original Notion list used snake_case names in some places. Keep repo files in kebab-case unless the wider repo convention changes.

## Update Guidelines

When improving the knowledge layer:

- Prefer practical examples over abstract explanation.
- Keep language specific to local service operators.
- Preserve compliance boundaries.
- Do not add lender-specific claims unless verified and sourced.
- Avoid hardcoded rates, terms, approval promises, or lender eligibility claims.
- Mark assumptions as assumptions.
- Keep CSV files machine-readable.
- Keep Markdown files useful for both humans and GPT knowledge upload.

## Quality Checklist

Before committing updates to this folder, check:

- Does the file help the GPT make better decisions?
- Does it reduce generic outreach?
- Does it avoid underwriting language?
- Does it preserve the blue-collar/local-service focus?
- Does it work for Clay/Apollo/CRM workflows?
- Does it include examples or clear rules?
- Does it avoid invented facts and funding guarantees?

## Deferred / Future Knowledge Files

Potential Batch 2 files:

- `seasonality-by-trade.md`
- `regional-trigger-notes.md`
- `blue-collar-industry-glossary.md`
- `capital-intensity-by-industry.csv`
- `review-signal-interpretation.md`
- `job-posting-signal-guide.md`
- `email-variation-bank.md`
- `industry-exclusion-rules.md`
- `batch-processing-format-examples.md`
- `apollo-clay-prompt-templates.md`

These should be added only when they contain real usable content, not empty placeholders. Empty files are how knowledge bases become junk drawers with Wi-Fi.
