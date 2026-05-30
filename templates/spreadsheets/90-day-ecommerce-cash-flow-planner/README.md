---
title: "90-Day Ecommerce Cash Flow Planner Asset Package"
asset_type: "spreadsheet-package"
source_repo: "JFeimster/ecommerce-cash-flow"
source_paths:
  - "spreadsheet/90-day-ecommerce-cash-flow-planner-spec.md"
  - "spreadsheet/formulas.md"
  - "spreadsheet/conditional-formatting-rules.md"
  - "spreadsheet/sample-data.md"
status: "curated-import"
tags:
  - ecommerce
  - cash-flow
  - spreadsheet
  - planning
---
# 90-Day Ecommerce Cash Flow Planner Asset Package

## What This Planner Is

This package defines a reusable 13-week (90-day) ecommerce cash flow planning workbook design. It is intended for building or adapting a spreadsheet that helps operators see cash timing risk early across revenue, expenses, inventory, ads, and debt payments.

## Who It Is For

- Ecommerce operators and founders
- Multi-channel sellers (Shopify, Amazon, Etsy, TikTok Shop, WooCommerce, Walmart)
- Agencies, consultants, and operators supporting ecommerce finance planning

## Included Files

- spec.md: workbook structure, tab design, and weekly workflow
- formulas.md: core formulas for dashboard, tab links, alerts, and scenarios
- conditional-formatting-rules.md: visual alert logic for cash and risk conditions
- sample-data.md: fictional sample dataset for testing and walkthroughs

## How to Use

1. Build a workbook using spec.md as the tab-by-tab blueprint.
2. Implement formulas from formulas.md and validate every referenced range.
3. Apply status and warning formatting from conditional-formatting-rules.md.
4. Load fictional values from sample-data.md to smoke-test the workbook.
5. Replace sample inputs with live business data and run a weekly review cycle.

## Formula and Layout Caution

Formulas reference specific tabs, columns, and row ranges (for example, Week 1-13 in rows 3-15). If workbook layout changes, update formulas and conditional formatting references before using outputs for planning decisions.

## Connections to GPTs, Prompts, and Future Calculators

- Custom GPT: pair this package with custom-gpts/ecommerce-cash-flow-forecaster/system-instructions.md for narrative analysis.
- Prompt packs: use weekly and scenario prompts to convert workbook outputs into operator action plans.
- Future calculators: use this package as the specification baseline for deterministic calculator builds under calculators/ecommerce/cash-flow-planner/.

## Compliance Note

This package is for cash flow planning support only. It is not legal, tax, accounting, lending, investment, or financial advice. It is not a loan approval, qualification decision, or guarantee of funding.

## Source Attribution

Curated from JFeimster/ecommerce-cash-flow spreadsheet assets listed in frontmatter.
