# AI Tools Source Layer

`ai-tools/` stores curated source packages and supporting assets for AI tools, agents, assistants, prompts, schemas, actions, workflows, templates, playbooks, integrations, skills, and shared knowledge.

## Canonical Structure

```txt
ai-tools/
  custom-gpts/
  agents/
  assistants/
  skills/
  prompts/
  schemas/
  actions/
  workflows/
  templates/
  playbooks/
  integrations/
  shared-knowledge/
```

## Operating Rules

- Normalize imported agents into `ai-tools/agents/[slug]/README.md`.
- Do not use `ai-tools/agents/source/ai-agent-library/` as a long-term source path.
- Do not use `ai-tools/tool-profiles/`.
- Do not use `ai-tools/case-studies/`.
- Do not use `ai-tools/calculators/content-notes/`.
- Move UI/demo app builds into `showcase/builds/`.
- Keep production directory presentation in `directory/`, not `showcase/`.
