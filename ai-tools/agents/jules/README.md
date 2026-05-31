---
title: "Jules Agent Specs"
slug: "jules-agent-specs"
agent_platform: "Jules"
category: "Coding Ops"
status: "active"
version: "1.0"
---

# Jules Agent Specs

## Source / Platform Note

This section defines Jules-style coding and repository operator specs for `ai-agent-arsenal`.

## Purpose

Provide normalized, reusable agent specs for repository operations, review, triage, migration planning, and documentation maintenance.

## Scope Boundaries

- `ai-tools/agents/jules/`: Jules platform agent specs and operational documents.
- `ai-tools/custom-gpts/`: packaged ChatGPT CustomGPT products.
- `ai-tools/workflows/`: automation workflows.
- `ai-tools/templates/`: global reusable templates.
- `showcase/`: UI and demo builds.
- `directory/`: public-facing static directory site.

## Structure

```txt
ai-tools/agents/jules/
  README.md
  templates/
    task-template.md
  playbooks/
    repo-cleanup-playbook.md
  repo-cleanup-operator/
    README.md
  pull-request-review-agent/
    README.md
  documentation-maintainer/
    README.md
  issue-triage-agent/
    README.md
  migration-planner/
    README.md
```

## Usage

1. Start from `templates/task-template.md` to define scope and acceptance criteria.
2. Select the closest agent spec and execute its default workflow.
3. Use `playbooks/repo-cleanup-playbook.md` for safe, batch-based cleanup changes.
4. Keep docs aligned with actual repo paths after every structural change.

## Normalization Notes

- Migrated legacy flat files into structured paths.
- Preserved original intent from the previous Jules placeholders and expanded into actionable specs.
- Consolidated naming to match canonical `ai-tools` conventions.

## Quality Bar

- No changes to unrelated platform folders.
- No folder moves outside the Jules scope.
- Every spec includes explicit safety rules and success criteria.
