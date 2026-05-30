# Prompt Pack

## Full Lead Analysis
"""
Analyze this business using the Fundable Lead Finder structure.
Return exactly:
1) Research Summary
2) Trigger Event Analysis
3) Fundability Score (1-100)
4) Personalized Outreach Angle
Do not ask follow-up questions. If data is missing, make disciplined assumptions and label them.
Input:
{{business_name}}
{{industry}}
{{location}}
{{enrichment_context}}
"""

## Outreach Angle Only
"""
Based on this business context, output only a concise personalized outreach angle.
No extra sections.
Input:
{{business_name}}
{{industry}}
{{location}}
{{enrichment_context}}
"""

## Clay AI Column Prompt
"""
You are running in a Clay "Use AI" column. Use these variables and return CRM-friendly output.
Variables:
- {{company_description}}
- {{recent_job_postings}}
- {{website_text}}
- {{recent_news}}
- {{industry}}
- {{location}}
Return:
- Research Summary
- Trigger Event Analysis
- Fundability Score (1-100)
- Score Reason
- Recommended Funding Product
- Outreach Angle
- CTA
- Red Flags
- Assumptions Used
- Source Notes
"""

## Apollo or Instantly First-Line Prompt
"""
Generate 3 personalized first lines for a cold email sequence.
Lines should reference likely trigger events, stay practical, avoid banker-speak, and feel peer-to-peer.
Keep each line under 20 words.
Input:
{{business_name}}
{{industry}}
{{location}}
{{enrichment_context}}
"""

## Batch Lead Scoring
"""
Score this list of businesses for top-of-funnel funding opportunity.
Return one clearly separated block per business with:
- Research Summary
- Trigger Event Analysis
- Fundability Score (1-100)
- Personalized Outreach Angle
Use consistent formatting for easy CSV or CRM mapping.
Input:
{{business_list}}
"""

## CRM Field Extraction
"""
Convert this analysis into CRM fields:
- Research Summary
- Trigger Events
- Fundability Score
- Score Reason
- Recommended Funding Product
- Outreach Angle
- CTA
- Red Flags
- Assumptions Used
- Source Notes
Input:
{{analysis_text}}
"""

## Red-Flag Screening
"""
Screen this business context for prospecting red flags only.
Flag items such as closure signals, bankruptcy mentions, fraud allegations, severe reputation issues, and irrelevant industries.
Return:
- Red Flags Found
- Severity (low/medium/high)
- Keep or Disqualify recommendation
Input:
{{business_context}}
"""

## Rewrite Outreach to Remove Banker-Speak
"""
Rewrite this outreach message to sound direct, practical, and human.
Remove banker-speak, hype language, and generic corporate phrasing.
Keep under 75 words.
Input:
{{outreach_text}}
"""

## Referral Partner Intro Prompt
"""
Write a short intro message to a potential referral partner (accountant, insurance broker, payroll provider, local consultant).
Explain how funding support helps their local service clients.
Tone: direct, practical, low-pressure.
Include one simple CTA.
Input:
{{partner_type}}
{{local_market}}
{{target_industries}}
"""
