# Next.js Agent App Starter

> Source: JFeimster/ai-agent-library (platforms/vercel-web-apps/templates/nextjs-agent-app-readme.md). Imported/adapted for ai-agent-arsenal on 2026-05-30.


## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

```bash
AI_GATEWAY_API_KEY=
N8N_WEBHOOK_URL=
NEXT_PUBLIC_APP_URL=
```

## Routes

```text
/
  Landing page

/tools/[slug]
  Agent tool page

/api/agent/run
  Runs the selected agent

/api/leads
  Captures lead data
```

## How to Add an Agent

1. Add config to `/lib/agents/[slug].json`
2. Add output sections
3. Add form fields
4. Test `/tools/[slug]`
5. Deploy to Vercel

## Deployment

```bash
vercel
vercel --prod
```
