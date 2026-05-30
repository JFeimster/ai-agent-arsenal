# Content Model

This file defines how public directory content maps to source package content.

## Required Mapping

- `content/tools/[slug].md` is the public-facing directory profile.
- `ai-tools/custom-gpts/[slug]/` is the source package for instructions, knowledge, examples, integrations, widgets, landing pages, and assets.
- Do not use `agent-packages/`.
- Do not treat `content/tools/` as the source package folder.

## Core Entities

- Agents / tools
- Platforms
- Categories
- Tags
- Prompts
- Calculators
- Playbooks
- Case studies

## Source-to-Public Contract

1. Source package authoring happens in `ai-tools/custom-gpts/[slug]/`.
2. Public profile publication happens in `content/tools/[slug].md`.
3. Each profile should summarize the source package's problem, audience, and outcomes without duplicating internal implementation files.
