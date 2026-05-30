# Example App Spec: Funding Pipeline Triage Web App

> Source: JFeimster/ai-agent-library (platforms/vercel-web-apps/example-app-specs/funding-pipeline-triage-web-app.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


## App Name

Funding Pipeline Triage

## Agent Source

`agents/01-funding-pipeline-triage-agent.md`

## Buyer

Funding brokers, ISOs, loan broker teams, fintech operators.

## User Promise

Paste a funding email, applicant note, or lead summary. Get a CRM-ready funding pipeline record, stage recommendation, blocker, follow-up message, and next action.

## MVP Inputs

- Applicant/source notes
- Email subject
- Email body
- Known business name
- Known applicant name
- Current stage if known
- Desired CRM format

## MVP Outputs

- Pipeline Summary
- Extracted Fields
- Risk / Blocker
- Recommended Next Step
- CRM Note
- Client Follow-Up Message
- Tags

## Integrations

- HubSpot
- Notion database
- Google Sheets
- Gmail/Notion Mail
- n8n webhook

## CTA

- Save to CRM
- Create follow-up task
- Start funding application
- Book strategy call

## Monetization

- Internal efficiency
- Broker team setup fee
- Monthly pipeline ops retainer
- White-label CRM parser for broker teams
