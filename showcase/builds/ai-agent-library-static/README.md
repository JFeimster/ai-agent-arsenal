# AI Agent Library Static Directory Example

Source: JFeimster/ai-agent-library  
Imported/adapted for ai-agent-arsenal on 2026-05-30.

This folder is a reference example only. It is not the canonical or production UI for ai-agent-arsenal.

## Included files

- index.html
- style.css
- script.js
- site-data/agents.json

## Notes

- `script.js` first attempts to load `agent-index.json` from the same directory.
- If that file is unavailable, it falls back to `site-data/agents.json`.
- The fallback file is included here so the example runs locally without extra wiring.
- The fallback data preserves source-relative `agent.file` paths (for example `agents/01-...md`), so "View Spec" links may not resolve from this showcase build folder without path rewriting.

## Run locally

From this folder, run a local static server (example):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
