---
title: "Create Cash Flow Action Plan (No-Auth MVP Pattern)"
asset_type: "action-pattern"
source_repo: "JFeimster/ecommerce-cash-flow"
source_path: "docs/actions/create-cash-flow-action-plan.md"
status: "curated-import"
tags:
  - ecommerce
  - cash-flow
  - actions
  - api
  - reference
---
# Create Cash Flow Action Plan Action

## Summary

Reusable action pattern that turns ecommerce forecast inputs into a practical action plan (`today`, `next 7 days`, `next 14 days`, `next 30 days`) plus watchlist items, decision rules, warnings, and markdown output.

This asset is imported as documentation and reference logic only. It is not production-required code.

## Action Name

`create_cash_flow_action_plan`

## Customer-Facing Label

`Create My Cash Flow Action Plan`

## Pattern Scope

- Pattern type: no-auth MVP API action
- Intended use: planning and decision support
- Reference implementation: `examples/api/ecommerce/create-cash-flow-action-plan.js`

## Security Note (Required)

This pattern is intentionally no-auth for MVP prototyping. Secure it before production use:

- add authentication and authorization
- enforce rate limiting and abuse controls
- validate request schema server-side
- restrict CORS origins
- add request logging/monitoring and error observability

## Compliance Caution

- This action is not a funding approval engine.
- This action does not determine eligibility.
- This action does not qualify applicants.
- This action does not guarantee funding.
- This action is for planning and decision support only.

It does not provide legal, tax, accounting, lending, investment, or financial advice.

## Request Shape

```json
{
  "planWindowDays": 30,
  "business": {
    "businessName": "Example Ecommerce Store",
    "primaryPlatform": "Shopify",
    "averageMonthlyRevenue": "$15k-$50k"
  },
  "forecast": {
    "currentCashBalance": 12000,
    "minimumCashBuffer": 10000,
    "projectedCashLowPoint": 3500,
    "projectedCashLowPointWeek": 6,
    "projectedEndingCash": 18000,
    "estimatedFundingGap": 6500,
    "suggestedWorkingCapitalRangeLow": 6500,
    "suggestedWorkingCapitalRangeHigh": 7500,
    "cashRunwayDays": 12,
    "riskLevel": "High",
    "confidenceLevel": "Medium"
  },
  "cashFlowDrivers": {
    "inventoryPressure": true,
    "adSpendPressure": true,
    "payoutDelayPressure": true,
    "debtPaymentPressure": false,
    "marginPressure": false,
    "taxReservePressure": false,
    "primaryCashPressureReason": "Inventory and ad spend timing pressure"
  },
  "inventory": {
    "nextPurchaseAmount": 15000,
    "nextPurchaseWeek": 4,
    "stockoutRisk": "Medium"
  },
  "ads": {
    "weeklyAdSpend": 4500,
    "recommendation": "Hold or reduce until cash after inventory is confirmed."
  },
  "paymentObligations": {
    "weeklyPaymentTotal": 1200
  },
  "tracking": {
    "source": "Ecommerce Cash Flow Forecaster GPT",
    "sessionId": "test-session-001"
  }
}
```

## Response Shape

```json
{
  "success": true,
  "actionName": "create_cash_flow_action_plan",
  "displayText": "Create My Cash Flow Action Plan",
  "businessName": "Example Ecommerce Store",
  "riskLevel": "High",
  "priority": "Reduce cash pressure before the lowest-cash week",
  "missingFields": [],
  "warnings": [],
  "plan": {
    "priority": "Reduce cash pressure before the lowest-cash week",
    "today": ["..."],
    "next7Days": ["..."],
    "next14Days": ["..."],
    "next30Days": ["..."],
    "watchlist": ["..."],
    "decisionRules": ["..."]
  },
  "markdown": "# Cash Flow Action Plan...",
  "disclaimer": "This action plan is for planning support only..."
}
```

## Exclusions for This Batch

Intentionally excluded:

- `api/create-prefilled-funding-application-link.js`
- paused Tally prefill action wiring
- live Tally field UUIDs
- live form IDs
- hardcoded third-party operational configuration
- secrets, env files, or deployment-specific material

## Future OpenAPI Schema Needed

This pattern should eventually include a formal OpenAPI schema for stricter request/response validation and safer GPT Action integration. No final schema is defined in this batch.

## Use in AI Agent Arsenal

Use this as a reusable action blueprint for converting forecast state into operator actions. Keep it in reference mode until security and schema hardening are complete.
