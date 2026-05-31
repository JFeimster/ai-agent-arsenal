# Directory

`directory/` is the public-facing static directory site for AI Agent Arsenal.

This layer should render approved source assets from `ai-tools/` and shared indexes from `data/`. It is not the raw source package layer.

## Planned Structure

```txt
directory/
  index.html
  pages/
    tools.html
    agents.html
    skills.html
    playbooks.html
    templates.html
    submit.html
  assets/
    css/
      styles.css
    js/
      directory.js
      navigation.js
    images/
  data/
    directory.json
    navigation.json
```

## Operating Notes

- Keep source packages in `ai-tools/`.
- Keep shared registries and schemas in root `data/`.
- Keep this folder focused on static public presentation.
- Do not use `showcase/` as production source of truth.