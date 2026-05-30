# Manual Upload Guide

Use this file to document how to manually upload generated files into the correct repo folders.

## Required Rules

- `content/tools/[slug].md` is the public-facing directory profile.
- `ai-tools/custom-gpts/[slug]/` is the source package for instructions, knowledge, examples, integrations, widgets, landing pages, and assets.
- Do not use `agent-packages/`.
- Do not treat `content/tools/` as the source package folder.

## Upload Flow

1. Upload source package files into `ai-tools/custom-gpts/[slug]/` (or appropriate `ai-tools/` platform folder).
2. Upload/update the public profile markdown in `content/tools/[slug].md`.
3. Upload schemas and structured support files into `data/`.
4. Upload experimental exports into `variants/` when they are not canonical source artifacts.
5. Promote only reviewed winners into `canonical/`.
