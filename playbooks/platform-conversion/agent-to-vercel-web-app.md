# Agent-to-Vercel Conversion Guide

> Source: JFeimster/ai-agent-library (platforms/vercel-web-apps/agent-to-vercel-conversion-guide.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


## Objective

Convert a markdown-based agent spec into a deployable Vercel web app.

## Step 1: Choose the Agent Format

Decide whether the agent should become:

| Format | Best For |
|---|---|
| Public Lead Magnet | Top-of-funnel tools |
| Internal Ops Tool | CRM, SOP, workflow, intake parsing |
| Partner Portal Tool | Broker/affiliate enablement |
| Embeddable Widget | Wix blog, partner pages, calculators |
| Paid Tool | Stripe-gated workflow assistant |

## Step 2: Extract the Agent Configuration

From the Markdown file, extract:

- Agent name
- Buyer
- Pain solved
- Bio
- Instructions
- Rules
- Prompt library
- Output sections
- Knowledge base files
- Integrations
- Monetization path

Convert into `/lib/agents/[slug].json`.

## Step 3: Define the User Inputs

Every web app needs a clean form.

Recommended input fields:

```json
{
  "agent_slug": "local-referral-partner-scout",
  "user_name": "",
  "email": "",
  "business_or_contact": "",
  "market": "",
  "audience": "",
  "source_notes": "",
  "desired_output": ""
}
```

For internal tools, email capture can be optional. For public tools, capture email either before full result or after teaser result.

## Step 4: Define the Output Sections

Use the agent Markdown's default output format.

Example:

```json
[
  "Referral Partner Summary",
  "Why This Partner Matters",
  "Recommended Offer Angle",
  "Suggested First-Touch Message",
  "Suggested Follow-Up Message",
  "Lead Magnet / Resource to Share",
  "CRM Note",
  "Next Action"
]
```

## Step 5: Build the Prompt

Use a predictable structure:

```text
SYSTEM:
You are [Agent Name].
Your job is [bio].
Rules:
- ...
Output exactly these sections:
A. ...
B. ...

USER INPUT:
[structured form data]
```

## Step 6: Add Lead Capture

Minimum fields:

- Name
- Email
- Company
- Role
- Use case
- Consent checkbox if needed

Route leads to:

- Notion database
- HubSpot contact/deal
- Google Sheet
- n8n webhook
- Email notification

## Step 7: Add Export Options

Useful output actions:

- Copy Markdown
- Copy CRM Note
- Download `.md`
- Download `.json`
- Send to webhook
- Save to Notion
- Create HubSpot task
- Generate share link

## Step 8: Deploy on Vercel

Checklist:

- Set environment variables
- Confirm build passes
- Test API route
- Test form submission
- Test error states
- Test mobile layout
- Add analytics
- Add robots/noindex depending on sensitivity
- Add domain or subdomain

## Step 9: Decide Product Path

Turn the app into one of:

- Free lead magnet
- Paid template companion
- Internal operator tool
- Partner enablement resource
- Consulting diagnostic
- Lite SaaS
- Widget embedded in Wix/partner pages
