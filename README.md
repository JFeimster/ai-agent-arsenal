# AI Agent Arsenal

AI Agent Arsenal is a centralized directory and development hub for CustomGPTs, Gemini Gems, Google AI Studio apps, AI assistants, workflows, integrations, and operator-grade tooling.

## Source Layer Rules

- `content/tools/[slug].md` is the public-facing directory profile.
- `ai-tools/custom-gpts/[slug]/` is the source package for instructions, knowledge, examples, integrations, widgets, landing pages, and assets.
- Do not use `agent-packages/`.
- Do not treat `content/tools/` as the source package folder.

## Repository Model

```txt
ai-tools/      = source packages and shared templates for AI tools
content/tools/ = public-facing tool profile markdown files
content/       = additional public markdown assets (playbooks, landing pages, etc.)
data/          = structured source of truth and schemas
docs/          = operating manuals and contribution guidance
variants/      = experimental builds and UI variants
canonical/     = promoted production candidate assets
archive/       = retired exports and preserved history
```

## Working Pattern

1. Build or update tool source in `ai-tools/custom-gpts/[slug]/` (or other `ai-tools/` platform folders).
2. Publish/update the corresponding public profile in `content/tools/[slug].md`.
3. Keep shared schemas and manifests in `data/`.
4. Follow `docs/` for naming, upload, and content governance.
