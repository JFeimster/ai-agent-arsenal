# ai-agent-library Vercel Web Apps Import Notes

Source repository: JFeimster/ai-agent-library  
Source snapshot: 45e9701  
Import scope: Batch 4 (Vercel / web-app conversion playbooks).

## Imported files

- platforms/vercel-web-apps/agent-to-vercel-conversion-guide.md -> playbooks/platform-conversion/agent-to-vercel-web-app.md
- platforms/vercel-web-apps/README.md -> playbooks/platform-conversion/vercel-web-apps-overview.md
- platforms/vercel-web-apps/templates/* -> templates/vercel-web-apps/*
- platforms/vercel-web-apps/example-app-specs/*.md -> examples/vercel-agent-apps/*.md

## Skipped files

The following source files were reviewed but intentionally skipped in Batch 4 to reduce playbook noise and avoid deployment-specific clutter:

- platforms/vercel-web-apps/architecture.md
- platforms/vercel-web-apps/starter-project-spec.md
- platforms/vercel-web-apps/environment-variables.md
- platforms/vercel-web-apps/deployment-checklist.md
- platforms/vercel-web-apps/api-route-patterns.md
- platforms/vercel-web-apps/ui-patterns.md
- platforms/vercel-web-apps/lead-capture-patterns.md
- platforms/vercel-web-apps/monetization-patterns.md
- platforms/vercel-web-apps/vercel-project-matrix.md
- platforms/vercel-web-apps/manifest.json

## Separation rules applied

- Canonical conversion guidance is in playbooks/platform-conversion/.
- Reusable generic assets are in templates/vercel-web-apps/.
- Implementation examples are isolated in examples/vercel-agent-apps/.
- No secrets were imported.