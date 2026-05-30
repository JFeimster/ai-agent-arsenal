# Prompt Pack

## Score a Blue-Collar Service Lead
"""
Score this lead for funding-readiness using the lead-intake schema. Return a 0-100 score, score band, qualification gaps, risk flags, outreach angle, and recommended next action.
Use direct language and explain the score in under 120 words.
Input:
{{lead_json}}
"""

## Write a Funding Outreach DM
"""
Write a first-touch DM for this lead. Keep it practical, no hype, and under 120 words.
Mention the likely use of funds and propose one low-friction next step.
Input:
{{lead_json}}
{{score_json}}
"""

## Write a Follow-Up Sequence
"""
Create a 4-step follow-up sequence (Day 1, Day 3, Day 7, Day 12).
Each message must be short, human, and tied to the lead's context.
Include channel suggestions (SMS, email, DM, phone).
Input:
{{lead_json}}
{{score_json}}
"""

## Summarize Why a Lead May Be Fundable
"""
Summarize why this lead appears fundable in 5 bullets max.
Use only confirmed or clearly labeled unverified data.
Input:
{{lead_json}}
"""

## Identify Missing Qualification Data
"""
Identify the minimum missing data needed to move this lead from triage to broker-ready qualification.
Return a prioritized checklist with rationale.
Input:
{{lead_json}}
"""

## Turn a Spreadsheet Row Into a Prioritized Outreach Plan
"""
Given one spreadsheet row, produce:
- fundability score
- priority tier
- best outreach channel
- first message draft
- next follow-up date
Input row:
{{csv_row}}
"""

## Create a Daily Prospecting List
"""
From this lead batch, produce today's top 15 outreach targets.
Sort by funding-readiness and urgency. Include reason, channel, and opener.
Input:
{{lead_list_json}}
"""

## Write a Phone Opener
"""
Write a 20-30 second phone opener for this lead.
Direct tone, no fluff, no promises, and one clear next step.
Input:
{{lead_json}}
{{score_json}}
"""

## Write an Email Opener
"""
Write a short funding outreach email opener (subject + first paragraph).
Keep it human, specific to the business, and compliance-safe.
Input:
{{lead_json}}
{{score_json}}
"""

## Rewrite Outreach To Sound More Human
"""
Rewrite this outreach message to sound less salesy and more natural.
Keep core intent, remove hype language, and preserve compliance boundaries.
Input:
{{message_text}}
"""
