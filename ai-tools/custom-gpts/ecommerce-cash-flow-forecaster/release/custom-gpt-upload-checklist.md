---
title: "Custom GPT Upload Checklist - Ecommerce Cash Flow Forecaster"
asset_type: "release-checklist"
source_repo: "JFeimster/ecommerce-cash-flow"
source_paths:
  - "releases/v1.0/customgpt-upload-manifest.md"
  - "releases/v1.0/upload-checklist.md"
status: "curated-import"
tags:
  - custom-gpt
  - release-checklist
  - ecommerce
  - cash-flow
---
# Custom GPT Upload Checklist - Ecommerce Cash Flow Forecaster

## Purpose

Use this checklist to package and upload a cash-flow-focused Custom GPT knowledge base without creating a noisy, unsafe, or unfocused upload set.

## 1) File Scope Gate

Required core knowledge files:

- system instructions
- forecast intake structure
- forecasting logic
- output templates
- risk framework
- funding-trigger framework

Optional support files:

- spreadsheet spec/formulas/formatting/sample-data
- prompt packs (weekly analysis, scenario planning, funding memo)

Usually exclude from GPT knowledge unless needed for that GPT's job:

- marketing copy packs
- release notes/changelogs
- static website examples

## 2) Formatting Gate

Confirm each uploaded markdown file:

- has one clear H1
- uses consistent H2/H3 structure
- has valid code fences
- removes duplicate sections
- avoids broken raw HTML
- is readable with plain-English headings

## 3) Compliance Gate

Reject or rewrite content that implies:

- approval
- qualification
- eligibility
- guarantee of funding

Include planning-only language:

"This is a forecast-based planning estimate, not a loan approval, qualification decision, eligibility determination, funding guarantee, or legal, tax, accounting, lending, investment, or financial advice."

## 4) Voice Gate

Target voice:

- practical
- direct
- operator-friendly
- calm
- explicit about assumptions and uncertainty

Avoid:

- fear-driven copy
- fake precision
- generic consultant language

## 5) Upload Order

Recommended upload order:

1. system instructions
2. intake structure
3. forecasting logic
4. output templates
5. risk framework
6. funding-trigger framework
7. optional spreadsheet docs
8. optional prompt packs

## 6) Post-Upload Test Set

Run at least these tests:

1. Minimal intake only
2. Missing COGS / incomplete data
3. Mixed or messy transaction data
4. User asks funding eligibility directly
5. Inventory order stress test
6. Ad-spend increase stress test
7. Conservative/Base/Optimistic scenario request

Expected behavior:

- asks for missing critical fields
- labels assumptions and confidence
- avoids approval/eligibility/guarantee language
- recommends operational fixes before funding claims

## 7) Do-Not-Upload / Do-Not-Ship Gate

Do not upload or ship:

- secrets or env values
- live form UUIDs/IDs
- hardcoded operational keys
- paused experiments presented as production-ready
- generated clutter and deployment-only artifacts

## 8) Release Sign-Off

Before release, confirm:

- knowledge files match current version
- disclaimers and guardrails are intact
- source attribution exists for imported assets
- high-risk claims are absent
- final upload set is intentional and minimal

## Use in AI Agent Arsenal

Use this checklist for future Custom GPT import batches that require controlled scope, compliance guardrails, and reproducible packaging.
