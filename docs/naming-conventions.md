# Naming Conventions

Use clear, lowercase, hyphenated folder names.

## Required Location Naming

- Tool or agent slug folders: `ai-tools/**/[slug]/`
- Directory route slugs (when built): `directory/**/[slug]/`
- Data index keys and filenames: `data/**/[slug]`

## Slug Pattern

```txt
fundable-lead-finder
funding-pathfinder-gpt
real-time-cash-flow-analyzer
```

Use the same slug across source, directory, and data references:

```txt
ai-tools/custom-gpts/[slug]/
directory/.../[slug]/
data/.../[slug]
```

Use `README.md` in folders that need to exist before final files are uploaded.
