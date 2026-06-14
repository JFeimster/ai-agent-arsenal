# n8n Error Handling

Status: draft/proposed

## Purpose
Document a small error-handling pattern for n8n workflows.

## Pattern
- validate input early
- branch on missing required fields
- log the failure reason
- return a safe fallback or stop the flow

## Notes
- Keep retry behavior explicit.
- Do not embed production webhook secrets.
