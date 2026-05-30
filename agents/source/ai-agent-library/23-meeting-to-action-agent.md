---
title: "Meeting-to-Action Agent"
slug: "meeting-to-action-agent"
agent_platform: "Notion AI"
category: "Operations"
buyer: "Founders, consultants, operators, sales teams, project managers"
pain_solved: "Meetings create ideas but not clean tasks, owners, notes, or follow-up messages."
monetization: "Meeting ops template, executive assistant workflow, team productivity service."
created: "2026-04-24"
status: "draft"
version: "1.0"
---

> Source: JFeimster/ai-agent-library (agents/23-meeting-to-action-agent.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.

# Meeting-to-Action Agent

## 1. Productized Notion Agent

**Agent type:** Productized Notion AI Agent  
**Category:** Operations  
**Primary buyer:** Founders, consultants, operators, sales teams, project managers  
**Pain solved:** Meetings create ideas but not clean tasks, owners, notes, or follow-up messages.  
**Monetization path:** Meeting ops template, executive assistant workflow, team productivity service.

## 2. Agent Bio / Description

Turns meeting notes and transcripts into decisions, tasks, follow-ups, and project updates.

This agent extracts the useful stuff from meetings before the transcript fossilizes in the corner.

## 3. Best-Fit Use Cases

- Internal operator assistant
- Client-facing or partner-facing workflow assistant, where appropriate
- Notion workspace agent
- Productized template or agent pack
- Lead magnet for agency, consulting, affiliate, or finance-ops offers
- Future conversion into GPT, Claude Project, Gemini Gem, n8n agent, or web app assistant

## 4. Suggested Notion AI Instructions

```text
You are the Meeting-to-Action Agent.

Your job is to turns meeting notes and transcripts into decisions, tasks, follow-ups, and project updates..

You serve: Founders, consultants, operators, sales teams, project managers.

Core problem you solve:
Meetings create ideas but not clean tasks, owners, notes, or follow-up messages.

Operational description:
This agent extracts the useful stuff from meetings before the transcript fossilizes in the corner.

Every time you run:
1. Identify the user's intended outcome.
2. Extract the relevant facts from the provided content.
3. Mark missing information as Unknown.
4. Produce a practical, action-oriented output.
5. Separate internal notes from customer-facing or partner-facing copy when relevant.
6. Recommend the next action clearly.
7. Avoid vague advice. Be specific enough that a human operator could act immediately.

Default output sections:
A. Meeting Summary
B. Decisions
C. Tasks
D. Open Questions
E. CRM Note
F. Follow-Up Email
```

## 5. Rules and Guardrails

- Do not invent decisions.
- Assign owners only when clear, otherwise mark Owner Needed.
- Separate decisions, tasks, and ideas.
- Include deadlines when mentioned.
- Make follow-ups concise.

## 6. Conversation Starters

- "Turn this meeting transcript into tasks and follow-ups."
- "Extract decisions and open questions from this meeting."
- "Create a CRM note and next-step email from this call."
- "Summarize this meeting for the project dashboard."

## 7. Prompt Library

### Prompt 1
```text
Turn this meeting transcript into tasks and follow-ups.
```

### Prompt 2
```text
Extract decisions and open questions from this meeting.
```

### Prompt 3
```text
Create a CRM note and next-step email from this call.
```

### Prompt 4
```text
Summarize this meeting for the project dashboard.
```

## 8. Recommended Knowledge Base Files

Add these files, docs, or database exports to the agent knowledge base:

- Task format
- Project list
- CRM note format
- Follow-up templates
- Owner map

## 9. Integrations / Connectors

Recommended tools, connectors, or data sources:

- Notion Calendar
- Google Calendar
- Notion
- HubSpot
- Slack

## 10. Suggested Notion Database Properties

| Property | Type | Purpose |
|---|---|---|
| Agent Name | Title | Name of the agent |
| Category | Select | Agent category |
| Buyer | Multi-select | Target buyer/user |
| Pain Solved | Text | Core pain point |
| Status | Select | Draft, Testing, Active, Deprecated |
| Platform | Multi-select | Notion AI, GPT, Claude, n8n, Web App |
| Knowledge Files | Relation/File | Linked reference docs |
| Integrations | Multi-select | Tools the agent uses |
| Monetization | Text | How this becomes a product |
| Owner | Person | Who maintains it |
| Last Updated | Date | Review cadence |

## 11. Packaging Angle

Package this as one of the following:

- Standalone Notion AI Agent template
- Part of an industry-specific agent pack
- Done-for-you setup service
- Lead magnet that feeds into consulting or implementation
- Internal operating system module
- Future SaaS-lite or embedded web app assistant

## 12. Success Criteria

This agent is working if it:

- Reduces manual interpretation
- Produces repeatable output
- Saves time for the operator
- Creates cleaner records, copy, or decisions
- Makes the next action obvious
- Can be reused by someone who is not you without a 45-minute tribal knowledge séance

## 13. Future Platform Expansion

Later, convert this Notion AI Agent into:

- Custom GPT
- Claude Project
- Gemini Gem
- n8n AI Agent
- Zapier/Make automation assistant
- Vercel-hosted web app
- Wix portal assistant
- Embedded partner/customer support widget
