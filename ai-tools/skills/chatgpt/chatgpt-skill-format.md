# ChatGPT Skill Format

Status: draft/proposed

Use this format for ChatGPT-specific skills that package instructions, knowledge references, and optional action/tool assumptions.

## Required sections

## Purpose
State the exact job the skill performs.

## Trigger
Describe the user request or workflow that should activate the skill.

## Inputs
List the minimum context required.

## Outputs
Define the expected response shape, artifact, or handoff.

## Guardrails
- Keep instructions bounded to the stated task.
- Do not imply unavailable tools or hidden data.
- Do not include secrets, credentials, or production endpoints.

## Optional attachments
- knowledge files
- action schema references
- evaluation prompts
