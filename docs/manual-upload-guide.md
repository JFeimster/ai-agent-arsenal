# Manual Upload Guide

Use this file to document how to manually upload generated files into the correct repo folders.

## Required Rules

- `ai-tools/tool-profiles/[slug].md` is the public-facing directory profile source.
- `ai-tools/custom-gpts/[slug]/` is the source package for instructions, knowledge, examples, integrations, widgets, landing pages, and assets.
- Do not use `agent-packages/`.
- Do not treat `ai-tools/tool-profiles/` as the source package folder.

## Upload Flow

1. Upload source package files into `ai-tools/custom-gpts/[slug]/` (or appropriate `ai-tools/` platform folder).
2. Upload/update the public profile markdown in `ai-tools/tool-profiles/[slug].md`.
3. Upload schemas and structured support files into `data/`.
4. Upload browsable UI demos into `showcase/builds/` when they are not source artifacts.
5. Keep placeholder and deferred path decisions in `docs/manual-review/canonical/` when needed.
