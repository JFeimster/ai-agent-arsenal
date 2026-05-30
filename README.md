# AI Agent Arsenal

AI Agent Arsenal is a centralized directory and development hub for CustomGPTs, Gemini Gems, Google AI Studio apps, prompt systems, fintech calculators, automation blueprints, static site variants, and operator-grade AI tools.

This repo is designed to preserve experiments, organize reusable AI assets, support manual uploads, and eventually promote the strongest variants into a canonical public site.

## Repository model

Use this repo with a simple operating model:

```txt
variants/     = experiments and generated site variants
content/      = markdown/documentation source files
data/         = structured source of truth
docs/         = operating manual and planning docs
canonical/    = future promoted production candidate
archive/      = retired exports, old zips, and preserved experiments
```

## Recommended Repo Structure

```txt
ai-agent-arsenal/

README.md

docs/
  variant-review.md
  promotion-rules.md
  repo-structure.md
  roadmap.md
  naming-conventions.md
  content-model.md
  deployment-notes.md
  manual-upload-guide.md

data/
  agents.json
  agents.schema.json
  categories.json
  platforms.json
  statuses.json
  tags.json
  featured.json
  prompts.json
  calculators.json
  playbooks.json
  submissions.schema.json

content/
  tools/
    README.md
    tool-profile-template.md

  prompts/
    README.md
    prompt-template.md

  playbooks/
    README.md
    playbook-template.md

  calculators/
    README.md
    calculator-template.md

  case-studies/
    README.md
    case-study-template.md

variants/

  static-html/
    01-ops-command-center/
      README.md
      index.html
      styles.css
      script.js
      data/
      assets/

    02-directory-first/
      README.md
      index.html
      styles.css
      script.js
      data/
      assets/

    03-routed-tool-vault/
      README.md
      index.html
      styles.css
      script.js
      tools/
      calculators/
      prompts/
      playbooks/
      forge/
      assets/

  nextjs/
    01-ops-command-center/
      README.md
      package.json
      next.config.js
      app/
      data/
      public/

    02-directory-first/
      README.md
      package.json
      next.config.js
      app/
      data/
      public/

    03-routed-tool-vault/
      README.md
      package.json
      next.config.js
      app/
      data/
      public/

  notion-markdown/
    01-ops-command-center/
      README.md
      index.md
      tools.md
      prompts.md
      calculators.md
      playbooks.md

    02-directory-first/
      README.md
      index.md
      tools.md
      prompts.md
      calculators.md
      playbooks.md

    03-routed-tool-vault/
      README.md
      index.md
      tools.md
      prompts.md
      calculators.md
      playbooks.md
      forge.md

canonical/
  README.md
  tools/
  prompts/
  calculators/
  playbooks/
  forge/
  status/
  partners/

archive/
  README.md
```

## Folder purpose

### `docs/`

The repo operating manual. Use this for structure decisions, roadmap notes, promotion rules, naming conventions, deployment notes, and manual upload guidance.

### `data/`

The future shared source of truth for the directory. Use JSON files here to track agents, platforms, categories, statuses, tags, prompts, calculators, playbooks, and submission schemas.

### `content/`

Human-readable markdown source. Use this for tool profiles, prompt documentation, playbooks, calculator notes, and case studies before anything is converted into a deployable page or app.

### `variants/`

The experimental zone. Use this to preserve Flash UI exports, static HTML versions, Next.js versions, Notion/Markdown versions, Gemini-generated versions, Codex/Cursor-generated versions, and other prototype branches of the same concept.

### `canonical/`

The future winner. Once a variant is selected, cleaned, and reviewed, promote it here before deciding whether it should move to the repo root for deployment.

### `archive/`

The graveyard with receipts. Use this for retired versions, old zips, failed experiments, obsolete exports, and assets worth preserving but not maintaining.

## Promotion philosophy

Do not treat every generated site as production-ready. Preserve variants first, review them second, then promote the winner.

Suggested promotion flow:

```txt
variant export → review → cleanup → canonical candidate → production root or standalone repo
```

## Current focus

Initial priorities:

1. Preserve static HTML variants.
2. Create placeholder folders for Next.js and Notion/Markdown variants.
3. Build shared docs, data, and content structure.
4. Decide which variant becomes the canonical public directory.
5. Promote the winner into `canonical/` before production deployment.
