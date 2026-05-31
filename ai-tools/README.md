# AI Tools Source Layer

`ai-tools/` stores curated source packages and supporting assets for AI tools, agents, assistants, prompts, schemas, actions, workflows, templates, playbooks, integrations, skills, and shared knowledge.

## Canonical Structure

```txt
ai-tools/
  custom-gpts/
  agents/
    notion/
    chatgpt/
    claude/
    gemini/
    n8n/
    crewai/
    langchain/
  assistants/
  calculators/
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

- `custom-gpts/` is for packaged ChatGPT CustomGPT products.
- Platform-specific agent specs live at `agents/[platform]/[slug]/README.md`.
- Notion-born imported agents live in `agents/notion/`.
- Gemini Gems belong in `agents/gemini/` or `assistants/gemini/` depending on use.
- Move UI/demo app builds into `showcase/builds/`.
- Keep production directory presentation in `directory/`, not `showcase/`.

## Deprecated Paths

Do not use these deprecated locations:

- `tool-profiles/`
- `case-studies/`
- `calculators/content-notes/`
- `agents/source/ai-agent-library/`
