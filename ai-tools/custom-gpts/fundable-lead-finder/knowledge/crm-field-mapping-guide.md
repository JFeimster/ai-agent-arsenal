# CRM Field Mapping Guide

**File:** `crm_field_mapping_guide.md`
**Owner GPT:** Fundable Lead Finder
**Purpose:** Defines how to turn the GPT's analysis into clean, structured fields for Clay, Apollo, Instantly AI, or any CRM. This makes outputs automation-ready and consistent across thousands of leads.

> **Core rule:** When asked for field-level output, return ONLY the requested field's value — no preamble, no labels (unless asked), no follow-up questions. One value per field so it maps cleanly into a cell.

---

## 1. Standard Field Set

| CRM Field | Type | Source Section | Format / Constraints |
|---|---|---|---|
| `Research_Summary` | Long text | §1 Research Summary | 2-3 sentences, plain text |
| `Trigger_Event` | Short text | §2 Trigger Analysis | 2-5 words, single top trigger |
| `Trigger_Detail` | Long text | §2 Trigger Analysis | Bulleted or semicolon list of triggers |
| `Fundability_Score` | Number (1-100) | §3 Score | Integer only, no text |
| `Score_Tier` | Picklist | §3 Score | Hot / Strong / Moderate / Low / Poor / DQ |
| `Score_Reason` | Short text | §3 Score | One sentence |
| `Product_Fit` | Picklist | §3 / matrices | One product name (see list below) |
| `Outreach_Angle` | Long text | §4 Outreach | Full message, under 75 words |
| `Outreach_Hook` | Short text | §4 Outreach | One-sentence first line / icebreaker |
| `In_Scope` | Boolean | scope check | Yes / No |
| `Risk_Note` | Short text | red-flags | Flag + confirmed/"worth checking," or blank |

---

## 2. Picklist Value Standards (keep consistent)

**`Score_Tier`:** `Hot` (85-100) | `Strong` (70-84) | `Moderate` (55-69) | `Low` (40-54) | `Poor` (1-39) | `DQ` (out of scope / disqualified)

**`Product_Fit`:** `Equipment Financing` | `Fleet Financing` | `Working Capital` | `Line of Credit` | `Receivables Bridge` | `Freight Factoring` | `Materials Funding` | `Payroll Bridge` | `Project Financing` | `Expansion Capital` | `Marketing Capital` | `Seasonal Working Capital` | `MCA/Revenue-Based`

**`Trigger_Event` (common values):** `Storm demand surge` | `Hiring/scaling crews` | `Fleet expansion` | `Equipment purchase` | `Slow insurance receivables` | `Net-60 commercial AR` | `Seasonal ramp` | `Multi-location expansion` | `Fuel-cost pressure` | `New service line` | `Marketing push`

> Using a fixed vocabulary for `Trigger_Event` and `Product_Fit` keeps CRM filtering and reporting clean. Prefer a listed value over a freeform one.

---

## 3. Mapping the Output → Fields

From a full 4-part analysis, extract:
- **§1** → `Research_Summary`
- **§2** → `Trigger_Detail` (full) + `Trigger_Event` (the single strongest, as a tag)
- **§3** → `Fundability_Score` (number) + `Score_Tier` (tier) + `Score_Reason` (sentence) + `Product_Fit`
- **§4** → `Outreach_Angle` (full) + `Outreach_Hook` (first line only)
- **Scope/red-flags** → `In_Scope` + `Risk_Note`

---

## 4. Single-Field Request Behavior

When a Clay/Apollo column asks for one field, output ONLY that value:

- **Score column:** `78`
- **Tier column:** `Strong`
- **Trigger column:** `Storm demand surge`
- **Product column:** `Receivables Bridge`
- **Hook column:** `Crews booked through storm season but waiting on the insurance checks?`
- **In-scope column:** `Yes`

No labels, no quotes, no extra words — just the value, unless the user asks for a labeled format.

---

## 5. Multi-Field Structured Output

When the user wants several fields at once, use a clean `key: value` block (easy to parse) or CSV row:

**Key:value block:**
```
Research_Summary: <2-3 sentences>
Trigger_Event: <2-5 words>
Fundability_Score: <1-100>
Score_Tier: <tier>
Score_Reason: <one sentence>
Product_Fit: <product>
Outreach_Hook: <one sentence>
Outreach_Angle: <under 75 words>
In_Scope: <Yes/No>
Risk_Note: <flag or blank>
```

**CSV row (matching a header the user provides):**
```
Business,Trade,Location,Fundability_Score,Score_Tier,Trigger_Event,Product_Fit,Outreach_Hook,In_Scope,Risk_Note
```

---

## 6. Data Hygiene Rules

1. **Escape commas** inside CSV values by wrapping the value in double quotes.
2. **No line breaks** inside a single CSV field (keep summaries to one line in CSV mode).
3. **Always fill every field** — use `—` or `Unknown` rather than leaving blank, except `Risk_Note` which may be blank.
4. **Numbers are numbers** — `Fundability_Score` is an integer with no "/100" or text.
5. **Consistent casing** for picklists (match the standards above exactly).
6. **DQ leads:** set `Fundability_Score` blank or `0`, `Score_Tier` = `DQ`, `In_Scope` = `No`, and put the reason in `Risk_Note`.
7. **Never** add commentary, greetings, or questions to field outputs.

---

## 7. Example Mapped Record

```
Research_Summary: Tampa-based residential/commercial roofer expanding into Pasco County; crew hiring and "booked out" reviews point to strong demand.
Trigger_Event: Storm demand + hiring
Fundability_Score: 84
Score_Tier: Strong
Score_Reason: Capital-intensive roofer with confirmed hiring and expansion in a storm-prone market.
Product_Fit: Working Capital
Outreach_Hook: Crews booked through storm season but floating materials and payroll till the claims pay?
Outreach_Angle: Saw you're adding crews and pushing into Pasco. That growth usually means payroll and materials go out before the insurance checks land. We do working capital and receivables bridge funding for exactly that gap. Want me to send a quick example?
In_Scope: Yes
Risk_Note:
```
