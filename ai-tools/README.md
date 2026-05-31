# AI Tools Source Layer

This folder stores source packages and platform-aware agent assets for AI Agent Arsenal.

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

## Placement Rules

- `custom-gpts/` is for packaged ChatGPT CustomGPT products.
- Platform-specific agent specs live at `agents/[platform]/[slug]/README.md`.
- Notion-born imported agents live in `agents/notion/`.
- Gemini Gems belong in `agents/gemini/` or `assistants/gemini/` depending on use.

## Deprecated Paths

Do not use these deprecated locations:

- `tool-profiles/`
- `case-studies/`
- `calculators/content-notes/`
- `agents/source/ai-agent-library/`
