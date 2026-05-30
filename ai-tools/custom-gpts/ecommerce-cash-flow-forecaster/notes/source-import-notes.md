# Source Import Notes

- Source repo: `JFeimster/ecommerce-cash-flow`
- Cleanup branch purpose: consolidate previously scattered Ecommerce Cash Flow Forecaster assets into one CustomGPT package path.

## Reason For Consolidation

The initial import placed package-specific assets across root-level shared folders. This cleanup makes the CustomGPT package self-contained and easier to maintain.

## Old Scattered Root Paths Removed

- `custom-gpts/ecommerce-cash-flow-forecaster/system-instructions.md`
- `verticals/ecommerce/cash-flow/*`
- `templates/ecommerce/cash-flow-output-templates.md`
- `schemas/risk/ecommerce-cash-flow-risk-framework.md`
- `templates/spreadsheets/90-day-ecommerce-cash-flow-planner/*`
- `calculators/ecommerce/cash-flow-planner/*`
- `prompts/ecommerce/*`
- `prompts/funding/ecommerce-working-capital-memos.md`
- `actions/ecommerce/*`
- `examples/api/ecommerce/create-cash-flow-action-plan.js`
- `examples/static-tools/ecommerce-cash-flow/*`
- `templates/marketing/ecommerce-cash-flow-lead-magnet/*`
- `docs/release-checklists/custom-gpt-upload/ecommerce-cash-flow-forecaster.md`

## Final Canonical Package Path

`ai-tools/custom-gpts/ecommerce-cash-flow-forecaster`

All Ecommerce Cash Flow Forecaster-specific files now live under this folder.
