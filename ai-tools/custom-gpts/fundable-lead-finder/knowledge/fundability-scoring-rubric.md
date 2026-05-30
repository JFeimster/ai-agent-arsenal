# Fundability Scoring Rubric

**File:** `fundability-scoring-rubric.md`  
**Owner GPT:** Fundable Lead Finder  
**Purpose:** Defines how Fundable Lead Finder assigns a **1–100 top-of-funnel sales-opportunity score** to blue-collar and local service businesses for funding prospecting.

> **This is a sales-opportunity score, not an underwriting score.**  
> The score estimates whether a business looks worth prioritizing for a funding conversation based on trade fit, visible demand, trigger events, operational pressure, and obvious prospecting red flags. It does **not** approve, deny, underwrite, price, or predict a final funding decision.

---

## 1. Purpose

This rubric helps brokers, commercial finance advisors, funding teams, and affiliate partners prioritize local service business leads.

The score rewards signs that a business may need and be able to deploy capital soon, including:

- Hiring technicians, drivers, crews, dispatchers, office staff, or sales reps
- Buying trucks, tools, trailers, fleet assets, heavy equipment, or materials
- Expanding into new locations, service areas, commercial contracts, or new service lines
- Managing seasonal spikes, storm demand, restoration demand, backlog, or high-ticket projects
- Bridging payroll, receivables, fuel, insurance, supplier, inventory, or materials timing gaps

A high score means a funding conversation may plausibly help the business solve an operational problem.

A low score means the lead is too thin, too new, inactive, irrelevant, outside the target vertical, or visibly risky for practical outreach.

---

## 2. Scoring Philosophy

Fundable Lead Finder should score aggressively enough to support sales prospecting, but not so recklessly that every business becomes a “hot lead.”

Think like a practical funding operator:

- **Not a bank underwriter.**
- **Not a hype merchant.**
- **Not a generic lead scraper wearing a cheap suit.**

A useful score should answer:

> “Is this business worth prioritized outreach right now, and what is the most plausible funding angle?”

The model should favor **opportunity signals** over underwriting speculation. Do not penalize normal small-business messiness. Penalize only clear prospecting deal-killers.

---

## 3. How to Use This Rubric

Use the following process:

1. Start with a **Base Score** based on industry capital intensity.
2. Add points for confirmed or strongly implied **trigger events**.
3. Add points for **operational scale**, **cash-flow pressure**, and **outreach relevance**.
4. Subtract points for clear **red flags**.
5. Clamp the final score to the **1–100** range.
6. Assign a score tier.
7. Write a one-sentence justification.

```txt
Final Score = clamp(Base Score + Signal Modifiers − Red Flag Penalties, 1, 100)
```

When enrichment data is missing, make disciplined industry-based assumptions and label them clearly with language such as:

- “likely”
- “possible”
- “typical for this trade”
- “worth checking”

Never pause automated workflows to ask follow-up questions. The tool is intended to work inside workflows such as Clay, Apollo, Instantly AI, CSV enrichment, and CRM field generation.

---

## 4. Core Scoring Calibration

Use this table as a high-level calibration guide. The operational scoring model below uses base scores and modifiers, but these categories explain what the score should be measuring.

| Category | Suggested Weight | What To Look For |
|---|---:|---|
| Industry Capital Intensity | 20 | Fleet, equipment, materials, labor, project costs, insurance, fuel, receivables, seasonality |
| Trigger Event Strength | 25 | Hiring, expansion, new trucks/equipment, storm demand, large contracts, backlog, new service lines |
| Operational Scale Signal | 15 | Multiple crews, multiple locations, service radius, commercial clients, fleet photos, dispatch/team roles |
| Cash-Flow Pressure Likelihood | 15 | Payroll, materials, fuel, insurance, receivables, seasonality, upfront job costs, supplier payments |
| Digital Footprint / Activity | 10 | Website, Google Business Profile, reviews, social posts, recent updates, active hiring pages |
| Outreach Relevance | 10 | Clear product fit and a natural no-BS outreach angle |
| Red Flag Penalty | up to -60 | Closed business, bankruptcy/fraud/nonpayment mentions, severe reputation issues, no footprint, irrelevant industry |

Use the table as a reasonableness check. If the math produces a result that conflicts with the practical story, revisit assumptions and signal strength.

---

## 5. Base Score by Industry Capital Intensity

Assign the starting score based on the trade’s inherent capital needs. Use the closest match.

| Capital Intensity | Base Score | Representative Trades | Why It Matters |
|---|---:|---|---|
| Very High | 60 | Trucking, logistics, last-mile delivery, excavation, concrete, paving, towing, septic, demolition, crane/heavy equipment operators | Fleet, fuel, insurance, repairs, payroll, equipment, receivables, project timing |
| High | 52 | Roofing, HVAC, restoration, remediation, tree service, framing, structural trades, well drilling, fleet-based field services | Materials, crews, trucks, emergency work, storm/seasonal demand, supplier costs |
| Moderate–High | 45 | Electrical, plumbing, general contracting, landscaping, hardscaping, pest control, auto repair, moving companies | Trucks, tools, techs, local demand, materials, commercial contracts |
| Moderate | 38 | Lawn care, cleaning, janitorial, handyman, painting, pressure washing, locksmith | Labor, supplies, lighter equipment, smaller crews, contract growth |
| Lower | 30 | Solo operators and light-asset local services | May still need working capital, but capital deployment is less obvious |
| Excluded by Default | Do not score | SaaS, agencies, ecommerce, consultants, creators, white-collar professional services | Outside the core blue-collar/local service use case unless explicitly adapted |

If the user explicitly asks to adapt the framework outside blue-collar/local service businesses, score cautiously and label the adaptation.

---

## 6. Industry Capital Intensity Guide

| Industry | Baseline Influence | Common Capital Needs |
|---|---|---|
| Trucking / logistics / towing | Very High | Fleet repairs, fuel, tires, insurance, factoring, dispatch, payroll, receivables |
| Excavation / concrete / paving | Very High | Heavy equipment, crews, materials, job mobilization, seasonal project cycles |
| Restoration / remediation | High | Equipment, crews, emergency demand, insurance receivables, cash timing gaps |
| HVAC | High | Seasonal demand, technicians, trucks, parts, equipment, emergency calls |
| Roofing | High | Materials, crews, storm demand, insurance work, supplier costs |
| Plumbing / electrical | Moderate–High | Trucks, tools, emergency calls, technicians, commercial jobs |
| Landscaping / lawn care / tree service | Moderate–High | Seasonality, crews, trailers, mowers, fuel, dump trucks, lifts |
| Cleaning / janitorial | Moderate | Payroll, supplies, contract ramp-up, labor scheduling |
| Auto repair | Moderate | Parts inventory, lifts, diagnostic tools, bays, technicians |
| Professional services / SaaS / ecommerce | Excluded by Default | Outside the core use case unless explicitly adapted |

---

## 7. Additive Signal Modifiers

Add points for each confirmed or strongly implied signal. Cap total additions at **+45**.

### Hiring & Headcount Signals — max +12

| Signal | Points | Interpretation |
|---|---:|---|
| Active job posts for technicians, crews, or drivers | +8 | Demand for service capacity |
| Hiring dispatchers, office staff, or sales reps | +6 | Operational scale and growth |
| Multiple simultaneous openings or clear hiring spree | +10 | Strong growth signal |
| Single recent hire or generic “always hiring” page | +3 | Weak but useful signal |

### Expansion & Footprint Signals — max +12

| Signal | Points | Interpretation |
|---|---:|---|
| New location or new service area announced | +10 | Expansion capital or working-capital need |
| Multi-location or regional operator | +8 | Operational scale |
| New service line added | +6 | Equipment/material/marketing need |
| Franchise growth or acquisition of another operator | +9 | Expansion pressure |

### Equipment, Fleet & Materials Signals — max +10

| Signal | Points | Interpretation |
|---|---:|---|
| Evidence of fleet growth, new trucks, or equipment purchases | +8 | Equipment/fleet financing fit |
| Heavy or specialized equipment central to operations | +6 | Capital-intensive deployment |
| Large materials outlay implied by project type | +5 | Materials funding or working-capital fit |

### Demand, Contracts & Seasonality Signals — max +12

| Signal | Points | Interpretation |
|---|---:|---|
| Large commercial, municipal, or government contract | +10 | Project financing or receivables bridge fit |
| Visible backlog or booked-out demand | +8 | Working-capital pressure |
| Storm, disaster, or insurance-driven demand surge | +9 | Urgent capital need |
| Entering peak season | +6 | Seasonal working-capital pressure |
| Heavy marketing push, rebrand, or new website | +5 | Growth investment signal |

### Cash-Flow Pressure Signals — max +8

| Signal | Points | Interpretation |
|---|---:|---|
| Receivables delays or net-30/60/90 commercial client mix | +6 | Receivables bridge / working capital fit |
| Rising fuel, payroll, material, or insurance cost exposure | +4 | Operating pressure |
| Reviews or posts mention being “booked out,” “slammed,” or “busy” | +5 | Demand and backlog pressure |

### Digital Footprint / Activity Signals — max +8

| Signal | Points | Interpretation |
|---|---:|---|
| Active website and Google Business Profile | +3 | Verifiable business presence |
| Recent reviews or social posts | +3 | Active operator |
| Clear services, service area, and contact info | +2 | Easier outreach and qualification |
| Active careers page or hiring page | +3 | Hiring/growth support signal |

### Outreach Relevance Signals — max +8

| Signal | Points | Interpretation |
|---|---:|---|
| Clear funding product fit | +4 | Stronger outreach angle |
| Specific trigger-based message is obvious | +3 | Better personalization |
| Low-friction CTA can be written naturally | +1 | Better conversion potential |

When data is missing, you may apply partial or half credit for typical signals of the trade/region, but label the signal as assumed.

---

## 8. Red Flag Penalties

Subtract points for clear prospecting deal-killers.

| Red Flag | Penalty | Notes |
|---|---:|---|
| Business appears closed or inactive | -60 | Do not contact unless human confirms active status |
| Reviews/news mention bankruptcy, fraud, nonpayment, or lawsuits | -50 | Do not accuse in outreach; treat as major risk |
| Brand-new business under ~6 months | -35 | Usually too early for priority funding outreach |
| New business around 6–12 months | -15 | Possible nurture candidate, not usually a hot lead |
| No digital footprint or unverifiable business | -25 | Website missing, no reviews, no listing, unclear legitimacy |
| Severe reputation issues | -20 | Repeated scam/no-show/unpaid worker/failed job complaints |
| Out-of-scope industry | Disqualify | SaaS, ecommerce, agencies, consultants, creators unless explicitly adapted |
| Residential consumer-only / non-business | -30 | This tool is for business funding prospecting, not consumer lending |

Do **not** penalize for:

- Modest review count
- Old-school website
- Small team
- Normal contractor complaints
- Missing financials
- No known funding history
- Being a local owner-operator

Absence of a bonus is not automatically a penalty.

---

## 9. Score Tiers & Recommended Action

| Score Range | Tier | Meaning | Recommended Action |
|---:|---|---|---|
| 85–100 | Hot / Priority Lead | Strong trade fit, clear trigger event, obvious capital use case, no major red flags | Prioritize same-day outreach |
| 70–84 | Strong Lead | Good industry fit with confirmed or strongly implied capital need | Add to active outreach sequence |
| 55–69 | Moderate Lead | Fundable trade, but triggers are inferred or weak | Enrich further or use lighter-touch outreach |
| 40–54 | Low / Watchlist | Some fit, but limited evidence of scale or capital use | Nurture or deprioritize |
| 1–39 | Poor / Disqualified | Red flags, closed business, irrelevant industry, or weak prospecting fit | Skip or suppress |

The tier labels can be used in CRM fields, Clay columns, Apollo notes, or campaign segmentation.

---

## 10. Recommended Output Pattern

When explaining a score, use one tight sentence.

```txt
Score: <n>/100 — <primary reason(s)>.
```

Examples:

- `Score: 88/100 — Capital-intensive roofing operator in a storm-prone Florida market with active crew hiring and a natural materials/working-capital angle.`
- `Score: 82/100 — Fleet-heavy HVAC contractor with visible technician hiring, likely seasonal demand, and a clear equipment or payroll buffer use case.`
- `Score: 72/100 — Multi-location plumbing company with solid capital intensity and commercial service potential, but limited confirmed trigger data.`
- `Score: 61/100 — Fleet-based local operator with good trade fit, but no current growth signals in the available enrichment.`
- `Score: 18/100 — Reviews reference closure and nonpayment, which creates a prospecting deal-killer until manually verified.`

---

## 11. Worked Examples

### Example A — Roofing Contractor, Tampa, FL

**Available enrichment:** Hiring three crews, recent storm season, reviews mention booked-out schedule.

| Component | Points |
|---|---:|
| Base score: Roofing / High capital intensity | 52 |
| Multiple crew hiring | +10 |
| Storm-driven demand | +9 |
| Booked-out reviews | +5 |
| Red flags | 0 |
| **Final Score** | **76** |

**Tier:** Strong Lead  
**Justification:** `Score: 76/100 — Roofing contractor in a storm-prone market with active crew hiring, booked-out demand, and a natural materials/working-capital angle.`

---

### Example B — Trucking Company, Regional Operator

**Available enrichment:** 12 trucks, net-60 commercial contracts, no recent news.

| Component | Points |
|---|---:|
| Base score: Trucking / Very High capital intensity | 60 |
| Fleet central to operations | +6 |
| Receivables / net-60 mix | +6 |
| Likely fuel cost exposure, half-credit assumption | +2 |
| Red flags | 0 |
| **Final Score** | **74** |

**Tier:** Strong Lead  
**Justification:** `Score: 74/100 — Fleet-heavy trucking operator with commercial receivables exposure and likely fuel/cash-flow pressure, though current growth signals are limited.`

---

### Example C — Solo Handyman, Four-Month-Old Business

**Available enrichment:** No website, no reviews, unclear operating status.

| Component | Points |
|---|---:|
| Base score: Handyman / Moderate | 38 |
| Trigger signals | 0 |
| Brand-new under six months | -35 |
| No digital footprint | -25 |
| **Final Score** | **1** |

**Tier:** Poor / Disqualified  
**Justification:** `Score: 1/100 — Brand-new solo operator with no digital footprint or visible demand signals, making this a poor funding outreach target for now.`

---

### Example D — Restoration Company, Insurance Work

**Available enrichment:** Website highlights water/fire restoration, recent storm posts, reviews mention insurance claim work.

| Component | Points |
|---|---:|
| Base score: Restoration / High | 52 |
| Storm/disaster demand | +9 |
| Insurance receivables timing | +6 |
| Emergency response / crew demand implied | +4 |
| Red flags | 0 |
| **Final Score** | **71** |

**Tier:** Strong Lead  
**Justification:** `Score: 71/100 — Restoration operator with storm-driven demand and likely insurance receivables timing gaps, creating a practical working-capital or receivables bridge angle.`

---

### Example E — Landscaping Company Entering Spring Season

**Available enrichment:** Hiring seasonal crews, active social posts, new equipment photos.

| Component | Points |
|---|---:|
| Base score: Landscaping / Moderate–High | 45 |
| Seasonal crew hiring | +8 |
| New equipment photos | +8 |
| Entering peak season | +6 |
| Active digital footprint | +3 |
| Red flags | 0 |
| **Final Score** | **70** |

**Tier:** Strong Lead  
**Justification:** `Score: 70/100 — Seasonal landscaping operator with crew hiring, visible equipment investment, and spring ramp-up pressure that fits working capital or equipment financing.`

---

## 12. Assumption Rules

When information is missing, use careful assumptions. Do not invent facts.

Use:

- “likely seasonal demand”
- “possible equipment need”
- “typical for this trade”
- “worth checking”
- “based on available enrichment”

Avoid:

- “They are hiring”
- “They just bought trucks”
- “They have $80K monthly revenue”
- “They need funding”
- “They qualify”
- “They were approved”
- “They are struggling”
- “They are behind on payments”

Unless the user provided that exact information, do not state it as fact.

---

## 13. Outreach Translation Guide

The score should naturally map into an outreach angle.

| Main Score Driver | Suggested Outreach Angle |
|---|---|
| Hiring crews/techs/drivers | Payroll buffer, onboarding cost, working capital |
| Trucks/fleet/equipment | Equipment financing, fleet financing, repair capital |
| Materials-heavy projects | Materials funding, job-start capital, supplier payment support |
| Insurance receivables | Receivables bridge, claim timing gap support |
| Commercial contracts | Project financing, invoice timing support |
| Seasonal spike | Seasonal working capital, marketing/fuel/material buffer |
| Expansion/new location | Expansion capital, launch costs, staffing support |
| Marketing/rebrand push | Growth capital, campaign funding, sales ramp support |

Outreach should stay practical and specific. Do not lead with “business loan” if a more operational phrase fits better.

---

## 14. Compliance Boundary

This rubric supports **prospecting and outreach prioritization only**.

It does not:

- Approve or deny financing
- Replace lender underwriting
- Predict creditworthiness
- Determine pricing or terms
- Provide legal, tax, accounting, or financial advice
- Guarantee funding eligibility
- Make a final product recommendation to a borrower

All claims should be verified before direct outreach. Treat scraped, enriched, inferred, or third-party data as unverified until confirmed.

---

## 15. Quick Reference Cheat Sheet

```txt
1. Start with Base Score by industry capital intensity:
   Very High = 60
   High = 52
   Moderate–High = 45
   Moderate = 38
   Lower = 30

2. Add signal modifiers:
   Hiring/headcount ≤ +12
   Expansion/footprint ≤ +12
   Equipment/fleet/materials ≤ +10
   Demand/contracts/seasonality ≤ +12
   Cash-flow pressure ≤ +8
   Digital footprint/activity ≤ +8
   Outreach relevance ≤ +8
   Total signal bonus should usually stay ≤ +45

3. Subtract red flags:
   Closed/inactive = -60
   Bankruptcy/fraud/nonpayment/lawsuits = -50
   Brand-new under 6 months = -35
   New 6–12 months = -15
   No digital footprint = -25
   Severe reputation issues = -20
   Out-of-scope industry = disqualify

4. Clamp final score to 1–100.

5. Assign tier:
   85–100 = Hot
   70–84 = Strong
   55–69 = Moderate
   40–54 = Low / Watchlist
   1–39 = Poor / Disqualified

6. Write one sentence:
   Score: <n>/100 — <specific practical reason>.
```

---

## 16. Implementation Notes for GPT / Automation Use

For structured workflows, output the following fields:

| Field | Description |
|---|---|
| `fundability_score` | Final 1–100 sales-opportunity score |
| `score_tier` | Hot, Strong, Moderate, Low / Watchlist, Poor / Disqualified |
| `score_reason` | One-sentence justification |
| `primary_score_drivers` | Main positive signals |
| `red_flags` | Any penalties or disqualification reasons |
| `assumptions_used` | Any labeled assumptions |
| `recommended_funding_angle` | Best-fit operational funding angle |
| `outreach_angle` | Short no-BS outreach concept |
| `recommended_next_action` | Call, email, enrich further, nurture, suppress |

Keep outputs skimmable enough for CRM fields and spreadsheet columns.
