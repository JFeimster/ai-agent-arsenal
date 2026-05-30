# Fundable Lead Finder

## Purpose
Scores blue-collar service leads and writes practical, no-BS funding outreach for funding-readiness triage.

## Target Users
Loan brokers, funding affiliates, and local service business prospectors.

## Primary Use Cases
- Prioritize inbound and sourced leads by funding-readiness.
- Generate first-touch outreach and follow-up copy grounded in known business facts.
- Flag qualification gaps before a broker invests manual sales time.

## Inputs
- Lead and business details (industry, location, years in business, contact channels).
- Revenue and growth signals.
- Equipment or cash-flow need context.
- Data source notes and confidence level.

## Outputs
- Fundability score and score band.
- Qualification gaps and risk flags.
- Recommended next action.
- Outreach angle plus ready-to-send message drafts.

## File Location
ai-tools/custom-gpts/fundable-lead-finder/

### gpt/
    system-instructions.md
    current-gpt-instructions.md
    conversation-starters.md
    knowledge-manifest.md

  knowledge/
    fundability-scoring-rubric.md
    industry-trigger-event-matrix.csv
    funding-product-fit-matrix.csv
    outreach-voice-and-style-guide.md
    approved-outreach-examples.md
    bad-outreach-examples.md
    crm-field-mapping-guide.md
    lead-enrichment-interpretation-guide.md
    disqualification-and-red-flags.md
    sample-lead-analyses.md

  knowledge/optional/
    seasonality-by-trade.md
    regional-trigger-notes.md
    blue-collar-industry-glossary.md
    capital-intensity-by-industry.csv
    review-signal-interpretation.md
    job-posting-signal-guide.md
    email-variation-bank.md
    industry-exclusion-rules.md
    batch-processing-format-examples.md
    apollo-clay-prompt-templates.md

  prompts/
    lead-scoring-prompt.md
    outreach-generator-prompt.md
    follow-up-sequence-prompt.md
    referral-partner-prompt.md
    clay-ai-column-prompt.md
    apollo-first-line-prompt.md
    batch-lead-analysis-prompt.md

  schemas/
    lead-profile.schema.json
    trigger-event.schema.json
    funding-readiness-score.schema.json
    outreach-output.schema.json
    crm-field-output.schema.json
    batch-lead-analysis-output.schema.json

  data/
    sample-leads.json
    score-rubric.json
    industry-trigger-event-matrix.json
    funding-product-fit-matrix.json
    red-flags.json
    crm-field-map.json

  docs/
    use-cases.md
    compliance-notes.md
    operator-playbook.md
    clay-apollo-instantly-workflow.md
    crm-implementation-guide.md
    monetization-paths.md

  assets/
    thumbnail-prompt.md
    notion-cover-prompt.md

content/tools/
  fundable-lead-finder.md

## Public-Safe Positioning
Supports lead scoring, outreach prioritization, and funding-readiness triage. It does not approve or deny financing and does not replace underwriting.

## Status
Draft / v0.1

## Source Reference
Notion source: https://myfunding.notion.site/Fundable-Lead-Finder-GPT-fe3e846e4af741b3b7bee3cb2b9f11bb
