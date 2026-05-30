# Repo Structure

This file documents the operating structure for AI Agent Arsenal.

## Required Separation

- `content/tools/[slug].md` is the public-facing directory profile.
- `ai-tools/custom-gpts/[slug]/` is the source package for instructions, knowledge, examples, integrations, widgets, landing pages, and assets.
- Do not use `agent-packages/`.
- Do not treat `content/tools/` as the source package folder.

## Core Layout

```txt
ai-tools/
  custom-gpts/
  ai-assistants/
  gemini-gems/
  google-ai-studio-apps/
  automation-workflows/
  api-integrations/
  shared-knowledge/
  templates/

content/
  tools/
  playbooks/
  landing-pages/

data/
docs/
variants/
canonical/
archive/
```
