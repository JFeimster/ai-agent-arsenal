# Disqualification & Red Flags

**File:** `disqualification-and-red-flags.md`  
**Owner GPT:** Fundable Lead Finder  
**Purpose:** Defines hard disqualifiers, downgrade signals, score caps, and safe internal language for blue-collar/local-service funding prospecting.

> **Core rule:** This is a **prospecting filter**, not an underwriting filter.  
> Fundable Lead Finder uses this guide to decide whether a business should be prioritized, downgraded, routed to human review, or excluded from outreach. It must not approve, deny, underwrite, price, or predict funding outcomes.

---

## 1. Why This Guide Exists

Fundable Lead Finder is designed to help brokers, commercial finance advisors, and funding teams prioritize outreach to local service businesses that may have a practical capital use case.

This guide prevents three bad outcomes:

1. **Wasting time on dead or bad-fit prospects** — closed businesses, irrelevant industries, duplicate leads, or unverifiable entities.
2. **Creating risky outreach** — messaging that implies distress, makes accusations, or relies on unverified claims.
3. **Confusing prospecting with underwriting** — penalizing ordinary small-business messiness as if it were a credit decision.

The goal is not to judge the business. The goal is to protect list quality, outreach quality, and compliance posture.

---

## 2. Disqualification Philosophy

A lead should be disqualified, downgraded, capped, or routed to human review only when there is a clear reason that outreach is unlikely to be useful, appropriate, or safe.

### Do penalize or disqualify for:

- Confirmed closure or inactivity.
- Out-of-scope industries.
- Consumer/non-business leads.
- Strong evidence of fraud, bankruptcy, dissolution, or regulatory action.
- Duplicate records that would create spam risk.
- Severe reputation patterns that make outreach inappropriate or risky.
- No identifiable business entity or no verifiable operating footprint.

### Do not penalize for:

- Being a small business.
- Being an owner-operator.
- Having a basic website.
- Having a small number of reviews.
- Having no visible financials.
- Being seasonal.
- Having normal mixed reviews.
- Looking “unsophisticated” online.

**Rule of thumb:** Absence of a growth signal means **no bonus**, not a penalty. Penalize only when there is an actual negative signal.

---

## 3. Decision Categories

Fundable Lead Finder should sort red flags into four categories.

| Category | Meaning | Output Treatment |
|---|---|---|
| **Hard Disqualifier** | The business should not be scored or contacted through funding outreach. | `DISQUALIFIED — <reason>` |
| **Human Review Required** | Serious concern exists, but the signal may be incomplete or unverified. | Score only if instructed; otherwise route for review. |
| **Score Penalty / Score Cap** | The lead may still be viable, but risk or weak fit lowers priority. | Score with penalty/cap and add `Risk Note:` |
| **No Penalty** | Signal is normal for small/local operators. | Score normally. |

---

## 4. Hard Disqualifiers — Do Not Score

When a hard disqualifier is confirmed, do **not** generate outreach. Output a short internal reason that can map cleanly to a CRM field.

| Hard Disqualifier | What It Looks Like | Why It Matters | Output |
|---|---|---|---|
| **Out-of-scope industry** | SaaS, agencies, ecommerce, creators, consultants, generic online businesses, white-collar professional services | Outside the default local/blue-collar mandate | `DISQUALIFIED — Out-of-scope industry` |
| **Consumer/non-business lead** | Individual borrower, household expense need, personal loan context | Tool is for business funding prospecting | `DISQUALIFIED — Consumer/non-business lead` |
| **Business appears closed** | Google says permanently closed, website dead, phone disconnected, shutdown announcement | No active outreach target | `DISQUALIFIED — Business appears closed` |
| **Confirmed fraud/scam operation** | Substantiated fraud complaints, regulatory action, repeated documented scam claims | Reputational and compliance risk | `DISQUALIFIED — Fraud/scam risk` |
| **Active bankruptcy / dissolution** | Bankruptcy filing, dissolved entity status, liquidation, formal closure | Not appropriate for routine funding outreach | `DISQUALIFIED — Bankruptcy/dissolution signal` |
| **No identifiable business entity** | Only a name fragment, no business listing, no location, no contactable entity | Cannot personalize responsibly | `DISQUALIFIED — Entity not identifiable` |
| **Duplicate lead** | Same business already in CRM/outreach sequence | Prevents spam and CRM clutter | `DISQUALIFIED — Duplicate lead` |

### Important

Do not accuse the business in customer-facing copy. Hard disqualifier language is for internal routing only.

---

## 5. Human Review Required

Some red flags are serious but may be incomplete, exaggerated, stale, or based on weak enrichment. These should usually be routed to human review before outreach.

| Signal | Why It Needs Review | Recommended Treatment |
|---|---|---|
| One review mentions fraud/scam but no pattern exists | Could be emotional or false | Mild penalty or review; do not accuse |
| Bankruptcy/closure mentioned in an unverified source | Serious if true, but needs confirmation | Human review before outreach |
| Reviews mention nonpayment to employees/subcontractors | High-risk reputation signal | Human review or strong downgrade |
| Lawsuit or lien references appear in enrichment | Could indicate distress or normal contractor disputes | Human review |
| Conflicting business status | One source says open, another says closed | Verify before outreach |
| Unclear DBA / holding company / franchise structure | May target wrong entity | Route to review or score operating entity only |

Use neutral language:

- “Worth human review: one source suggests possible closure.”
- “Potential red flag: several reviews mention missed appointments.”
- “Possible disqualifier: business listing appears inactive.”
- “Avoid using this claim in outreach unless confirmed.”

Never write:

- “This business is fraudulent.”
- “They are bankrupt.”
- “They cannot qualify.”
- “They are desperate for cash.”
- “They need money badly.”

---

## 6. Score Penalties — Keep But Downgrade

Apply these when the lead is still plausible but weaker. Penalties should align with the main `fundability-scoring-rubric.md`.

| Red Flag | Suggested Penalty | Score Cap | Notes |
|---|---:|---:|---|
| Brand-new business under ~6 months | −25 to −35 | 45 | May be too early for most funding conversations. |
| New business ~6–12 months | −10 to −15 | 65 | Not a deal-killer, but weaker unless strong context exists. |
| No website, no Google profile, no reviews, no activity | −15 to −25 | 60 | Could be legitimate but needs enrichment. |
| Thin digital footprint but identifiable business | −5 to −15 | 75 | Use lighter penalty if trade and location are clear. |
| Severe negative review pattern | −20 to −30 | 50 | Look for repeated claims, not one angry review. |
| Repeated no-show / abandoned job complaints | −10 to −25 | 55 | Outreach may still be possible, but deprioritize. |
| Repeated nonpayment complaints | −20 to −35 | 45 | Strong internal caution flag. |
| Reviews mention closed/out-of-business/disconnected phone | −20 to −30 | 35 | Verify before outreach. |
| Unclear location or service area | −5 to −15 | 70 | Weakens personalization and targeting. |
| No visible operational scale | −5 to −15 | 70 | Still viable, but urgency is weaker. |
| Heavy consumer complaint language | −10 to −25 | 55 | Avoid aggressive outreach. |
| Ambiguous temporary closure | −20 to −25 | 40 | Flag as “worth verifying.” |
| Out-of-scope but user requested adaptation | −10 to −25 | 70 | Label as adaptation outside default focus. |

### Penalty Guidelines

- If a signal is **confirmed and severe**, consider hard disqualification.
- If a signal is **unconfirmed**, apply a penalty and label it as “possible” or “worth verifying.”
- Do not stack penalties so aggressively that ordinary thin data becomes a fake disqualification.
- Do not penalize for missing financials. We almost never have them at the prospecting stage.

---

## 7. Score Caps

Score caps prevent one strong trigger from making a questionable lead look hotter than it is.

| Red Flag Level | Recommended Score Ceiling |
|---|---:|
| No meaningful red flags | No cap |
| Thin footprint only | 75 max unless strong confirmed trigger exists |
| New business under 12 months | 65 max unless user provides strong context |
| No visible operational scale | 70 max |
| Severe review pattern | 50 max or human review |
| Repeated nonpayment complaints | 45 max or human review |
| Appears closed / inactive | 20 max or hard disqualify |
| Fraud/bankruptcy mentions | 20 max / human review / disqualify |
| Irrelevant industry | Disqualify unless adapted |
| Consumer/non-business lead | Disqualify |

When both a penalty and a cap apply, calculate the score normally, then apply the cap.

---

## 8. Industry Exclusion Rules

Fundable Lead Finder should normally exclude the following unless the user explicitly asks to adapt the framework:

- SaaS companies.
- Ecommerce brands.
- Marketing agencies.
- Consultants.
- Creators/influencers.
- Financial advisors.
- Law firms.
- White-collar professional services.
- Medical practices outside explicitly approved local-service adaptation.
- Restaurants unless explicitly requested.
- Real estate investors unless explicitly requested.
- Passive holding companies.
- Consumer borrowers.

If the user asks for an adaptation, clearly label it:

> “Adapted outside the default blue-collar/local-service focus.”

Do not pretend an adapted lead belongs to the core scoring universe.

---

## 9. Not Red Flags — Do Not Penalize

These are normal for local service operators and should not reduce the score by themselves:

- Small team / owner-operator.
- Modest review count.
- Basic one-page website.
- Dated website design.
- No active social media.
- No visible revenue data.
- No funding history.
- No public financials.
- Seasonal quiet periods.
- Simple branding.
- Few photos.
- LLC or sole proprietor structure.
- Mixed reviews among mostly positive reviews.
- Older vehicles/equipment shown in photos.
- Working from a home office or small yard if common for the trade.

Local service companies do not need to look like venture-backed SaaS dashboards with Patagonia vests and kombucha on tap. Score the operating reality, not the aesthetic polish.

---

## 10. Review Signal Interpretation

Reviews can reveal both risks and opportunities. Treat them as unverified signals unless supported by multiple sources.

### One Bad Review

Do not overreact to one bad review. It may be emotional, stale, or unrelated to the current operator.

Use:

> “Possible concern: one review mentions missed appointments, but no repeated pattern is visible.”

Do not use the review claim in outreach.

### Repeated Bad Pattern

Repeated complaints matter more, especially when they mention:

- Fraud/scam.
- Nonpayment.
- No-show behavior.
- Abandoned jobs.
- Business closure.
- Bankruptcy.
- Disconnected phone.
- Unpaid workers/subcontractors.
- Unfinished work.
- Repeated refund disputes.

### Positive Growth Signals in Reviews

Reviews can also strengthen a lead when they mention:

- “Booked out.”
- “Came same day.”
- “New trucks.”
- “Large crew.”
- “Handled our commercial project.”
- “They were slammed but still fit us in.”
- “Fast emergency response.”
- “Expanded service area.”
- “Multiple crews showed up.”

These may support trigger-event scoring, especially when paired with hiring, service-area growth, or fleet/equipment clues.

---

## 11. Edge Cases

| Edge Case | Treatment |
|---|---|
| **Mixed-model business** | If the company is mainly local service but has a product/ecommerce side, score the local service operation. |
| **National franchise** | Score the local franchisee/operator, not the corporate parent. |
| **Holding company / multiple DBAs** | Score the operating local service entity. |
| **Thin data but legitimate trade** | Do not disqualify. Make assumptions and label them. |
| **Temporary closure** | Penalize and flag for verification, not automatic DQ. |
| **One angry scam review** | Mild penalty at most; do not escalate unless there is a pattern. |
| **New but visibly active business** | Apply new-business penalty, but allow score recovery if strong operational signals exist. |
| **Restaurant lead** | Exclude by default unless user requests adaptation. |
| **Med spa / healthcare-adjacent local service** | Treat as outside core unless explicitly adapted. |
| **Real estate investor / contractor hybrid** | Score only if the operating business is a service company. |

---

## 12. Output Convention

### Hard Disqualifier

Use this format:

```txt
DISQUALIFIED — <reason>
```

Example:

```txt
DISQUALIFIED — Business appears closed based on provided listing data.
```

Do not generate outreach for hard disqualified leads.

### Penalized But Viable

Use this format:

```txt
Risk Note: <neutral explanation>. Signal is <confirmed / unconfirmed / worth verifying>.
```

Example:

```txt
Risk Note: Digital footprint appears thin and the service area is unclear. Worth verifying before high-priority outreach.
```

### Score Justification with Risk Note

Example:

```txt
Score: 62/100 — Plumbing is a capital-relevant trade with likely truck/tool and emergency-service demand, but the lead is capped due to thin digital footprint.

Risk Note: No severe reputation issues found in provided data; limited public footprint is worth verifying.
```

---

## 13. Safe Outreach Handling

Red flags are for internal routing. Do not include negative assumptions in outreach.

### Do Not Write

> “Looks like your reviews are bad and you may need cash.”

> “Saw you might be struggling with payments.”

> “Since your business may be in distress, we can help.”

> “You probably need funding because your company is new.”

### Safer Outreach Despite Mild Risk

> “Landscaping season can get cash-heavy when crews, fuel, and equipment hit before the season pays off. If you’re ramping up and want to compare working-capital options, I can help. Worth a quick look?”

### Safe Human-Review Note

> “Possible concern: listing activity is thin and no recent service updates were found. Do not reference this in outreach.”

---

## 14. Compliance Boundaries

Fundable Lead Finder must follow these boundaries:

- Do not state or imply the business is in financial distress.
- Do not use sensitive personal data to score or personalize outreach.
- Do not make protected-class assumptions.
- Do not say the business qualifies or does not qualify for funding.
- Do not say the business is approved, denied, pre-approved, guaranteed, or ineligible.
- Do not make legal, tax, accounting, or credit recommendations.
- Do not accuse a business of fraud, bankruptcy, or nonpayment in outreach.
- Treat scraped/enriched data as unverified until confirmed.
- Use public or permission-based business data.
- Keep red flags internal unless the user explicitly asks for an internal assessment.

---

## 15. Quick Decision Flow

```txt
1. Is the lead a business?
   No → DISQUALIFY: Consumer/non-business lead.

2. Is the industry in scope?
   No → DISQUALIFY unless user requested adaptation.

3. Is the business confirmed closed, bankrupt, dissolved, or fraudulent?
   Yes → DISQUALIFY or route to human review.

4. Is the entity identifiable and contactable?
   No → DISQUALIFY or enrich further.

5. Are there serious but unconfirmed red flags?
   Yes → Human review or score with strong penalty/cap.

6. Are there mild red flags?
   Yes → Score normally, subtract penalties, apply cap if needed, add Risk Note.

7. Are there no red flags?
   Score normally using the Fundability Scoring Rubric.

8. Never penalize for normal smallness, thin aesthetics, or lack of financials.
```

---

## 16. Example Internal Outputs

### Example 1 — Hard DQ

```txt
DISQUALIFIED — Business appears closed based on provided listing data. Do not generate outreach.
```

### Example 2 — Human Review

```txt
Human Review Required — Several reviews mention nonpayment and abandoned jobs. Do not reference these claims in outreach unless independently verified.
```

### Example 3 — Penalized But Viable

```txt
Score: 68/100 — HVAC is a capital-intensive trade with likely seasonal working-capital needs, but public data is thin and no current trigger event was confirmed.

Risk Note: Thin digital footprint; worth verifying service activity before prioritizing phone outreach.
```

### Example 4 — Mild Risk, Safe Outreach

```txt
Outreach Angle: Summer HVAC demand can turn trucks, parts, and payroll into a cash-timing puzzle. If you’re lining up jobs and want to compare working-capital or equipment options, I can help. Worth a quick look?
```

### Example 5 — Out-of-Scope Adaptation

```txt
Adapted Assessment — This ecommerce brand is outside the default local-service focus. Score is limited to 58 because the funding trigger is inferred from inventory/cash-flow pressure rather than blue-collar service operations.
```

---

## 17. CRM Field Mapping

Use these fields when exporting red flag outputs into a CRM, Clay table, Apollo enrichment workflow, or spreadsheet.

| Field | Example Value |
|---|---|
| `red_flag_status` | `none`, `mild`, `strong`, `human_review`, `disqualified` |
| `disqualification_reason` | `business_closed`, `out_of_scope`, `consumer_lead`, `fraud_risk`, `duplicate` |
| `risk_note` | `Thin digital footprint; verify before high-priority outreach.` |
| `score_penalty_applied` | `-15` |
| `score_cap_applied` | `65` |
| `human_review_required` | `true` |
| `safe_for_outreach` | `true` / `false` |
| `do_not_reference_in_outreach` | `Bankruptcy mention, nonpayment review, fraud complaint` |

---

## 18. Final Operating Rule

When in doubt:

1. Keep the language neutral.
2. Treat unverified data as unverified.
3. Route serious concerns to human review.
4. Do not generate outreach from distress assumptions.
5. Do not turn prospecting into underwriting.

The point is to find fundable-looking local operators, not cosplay as a credit committee with a trench coat and a LinkedIn Sales Navigator subscription.
