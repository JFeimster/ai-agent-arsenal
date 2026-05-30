# Vercel Web Apps Platform Pack

> Source: JFeimster/ai-agent-library (platforms/vercel-web-apps/README.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


**Platform:** Vercel  
**Use case:** Convert Notion AI Agent specs into lightweight web apps, embedded tools, partner portals, intake assistants, calculators, chat assistants, and productized AI workflows.  
**Created:** 2026-04-24

## Purpose

This folder documents how to turn the agent library into deployable web apps.

The Notion AI Agent files are excellent for internal workflows, but Vercel web apps give you:

- Public landing pages
- Embeddable widgets
- Lead capture
- Authenticated portals
- API routes
- AI chat interfaces
- Calculators and workflow tools
- Partner-specific microsites
- Shareable demos
- Monetizable SaaS-lite products

This is the folder where the tiny robot interns get websites, forms, buttons, and revenue paths. 🧃🤖

## Recommended Folder Structure

```text
platforms/
  vercel-web-apps/
    README.md
    architecture.md
    agent-to-vercel-conversion-guide.md
    starter-project-spec.md
    environment-variables.md
    deployment-checklist.md
    api-route-patterns.md
    ui-patterns.md
    lead-capture-patterns.md
    monetization-patterns.md
    vercel-project-matrix.md
    example-app-specs/
      funding-pipeline-triage-web-app.md
      local-referral-partner-scout-web-app.md
      partner-launch-kit-builder-web-app.md
      sop-goblin-web-app.md
      vercel-asset-librarian-web-app.md
    templates/
      nextjs-agent-app-readme.md
      app-router-api-route-template.ts
      agent-config-template.json
      lead-capture-schema.json
      vercel-env-example.env
```

## Recommended First Builds

| Priority | Web App | Why |
|---:|---|---|
| 1 | Funding Pipeline Triage Web App | Converts inbound leads into structured records |
| 2 | Partner Launch Kit Builder Web App | Creates immediate partner enablement value |
| 3 | Local Referral Partner Scout Web App | Useful for brokers, consultants, agencies, and local teams |
| 4 | SOP Goblin Web App | Easy to productize for agencies/operators |
| 5 | Vercel Asset Librarian Web App | Turns existing projects into a managed inventory |

## Core App Pattern

Every Vercel agent web app should have:

1. Landing page
2. Agent input form
3. AI processing route
4. Structured output view
5. Copy/export buttons
6. Optional lead capture
7. Optional auth or gated access
8. Optional webhook to Notion, HubSpot, Google Sheets, or n8n
9. Admin/config file for prompts and output sections
10. Analytics/tracking plan

## Default Stack

- Next.js App Router
- TypeScript
- Vercel deployment
- Vercel AI SDK or AI Gateway
- Serverless API route
- JSON agent config
- Optional: Tailwind, shadcn/ui, Supabase, Clerk, Stripe, n8n, Notion API, HubSpot API

## Philosophy

Not every agent deserves a full SaaS.

Some should be:
- Landing page + form
- Embeddable widget
- Private internal tool
- Partner-facing calculator
- Portal assistant
- Lead magnet
- Paid template companion
- Lightweight app that routes results into CRM

Ship the smallest useful version first. The cathedral can wait. The cash register cannot.
