# Ecommerce Cash Flow Forecaster

Ecommerce Cash Flow Forecaster is a CustomGPT asset package for 90-day/13-week ecommerce cash flow planning. It consolidates instructions, knowledge, prompts, spreadsheet documentation, action references, landing-page examples, marketing templates, and release packaging guidance.

This package is canonical at:
`ai-tools/custom-gpts/ecommerce-cash-flow-forecaster`

## Package Structure

- `instructions/`: system behavior and guardrails
- `knowledge/`: forecasting, output, risk, and funding-trigger frameworks
- `prompts/`: weekly analysis, scenario planning, and working-capital memo prompts
- `spreadsheet/90-day-ecommerce-cash-flow-planner/`: planner docs, formulas, formatting rules, sample data, calculator notes
- `actions/`: no-auth MVP action documentation and JS reference implementation
- `landing-page/`: static landing/embed example assets
- `marketing/`: lead-magnet and campaign template copy
- `release/`: reusable custom GPT upload checklist
- `notes/`: consolidation notes and source import details
- `metadata.json`: package metadata

## How To Use

### Knowledge Files
Use `knowledge/` with `instructions/system-instructions.md` as the baseline GPT behavior and forecasting logic.

### Prompts
Use `prompts/` for weekly reviews, scenario stress tests, and working-capital memo workflows.

### Spreadsheet Planner
Use `spreadsheet/90-day-ecommerce-cash-flow-planner/` to implement or adapt the planner structure, formulas, and formatting.

### Action Reference Files
Use `actions/` as reference-only MVP action patterns. Harden with auth, validation, and controls before production use.

### Landing Page / Embed
Use `landing-page/` as sanitized static examples and replace placeholder domains and links before deployment.

### Marketing Assets
Use `marketing/` as template copy, not mandatory brand language.

### Release Checklist
Use `release/custom-gpt-upload-checklist.md` to package and verify future CustomGPT uploads.

## Compliance Note

Planning support only. This package does not provide legal, tax, accounting, lending, investment, or underwriting advice, and does not make approval, eligibility, qualification, or funding guarantee claims.
