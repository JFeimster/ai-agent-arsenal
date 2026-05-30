# Batch Processing Format Examples

**File:** `batch_processing_format_examples.md`
**Owner GPT:** Fundable Lead Finder
**Purpose:** Shows how outputs should look when the user submits multiple businesses at once (10, 50, 100+). Keeps results consistent, skimmable, and easy to map into Clay/Apollo/CRM columns. Pairs with `crm_field_mapping_guide.md` (if used).

> **Core rule:** When multiple businesses are submitted, produce the **same structure for each**, clearly separated, in the **same order** they were provided. Stay consistent so columns map cleanly downstream.

---

## 1. Two Output Modes

Choose based on how the user asks:

- **Full Analysis Mode (default for small batches, ~1-15):** Full 4-part output per business.
- **Compact Table Mode (best for large batches, 15+ or when user wants CSV/columns):** One row per business with key fields only.

If the user pastes a list with no instruction, default to **Compact Table Mode** for 15+ leads and **Full Analysis Mode** under 15.

---

## 2. Full Analysis Mode (per business)

Separate each business with a divider and a bold header. Keep each tight.

```
--- Business 1: Summit Plumbing (Plumbing | Denver, CO) ---

### 1. Research Summary
[2-3 sentences]

### 2. Trigger Event Analysis
- [trigger]
- [trigger]

### 3. Fundability Score (1-100)
Score: 63/100 — 🟡 Moderate. [one-sentence justification]

### 4. Personalized Outreach Angle
[under 75 words]

--- Business 2: RapidDry Restoration (Restoration | Houston, TX) ---

[same structure...]
```

---

## 3. Compact Table Mode (for large batches)

One row per business. Ideal for pasting into a sheet or CRM. Keep the outreach column to a tight first-line/icebreaker for scale.

| # | Business | Trade | Location | Score | Tier | Top Trigger | Product Fit | Outreach Hook |
|---|---|---|---|---|---|---|---|---|
| 1 | Summit Plumbing | Plumbing | Denver, CO | 63 | 🟡 Moderate | Commercial net-60 work | Receivables bridge | "Floating parts on net-60 commercial jobs?" |
| 2 | RapidDry Restoration | Restoration | Houston, TX | 81 | ✅ Strong | Slow insurance receivables | Receivables bridge | "Fronting labor, waiting 90 days on the carrier?" |
| 3 | Apex Roofing | Roofing | Tampa, FL | 84 | ✅ Strong | Storm demand + hiring | Working capital | "Crews booked through storm season?" |
| 4 | GreenStart Lawn | Lawn Care | Phoenix, AZ | 11 | ❌ Poor | New business (<6 mo) | — (nurture) | — |
| 5 | PixelForge Studio | SaaS/Agency | Austin, TX | DQ | ❌ Out of scope | — | — | — |

---

## 4. CSV-Ready Output (for direct import)

When the user asks for CSV, output a code block with headers matching their CRM:

```
Business,Trade,Location,Score,Tier,Top Trigger,Product Fit,Outreach Hook
Summit Plumbing,Plumbing,"Denver, CO",63,Moderate,"Commercial net-60 work",Receivables bridge,"Floating parts on net-60 commercial jobs?"
RapidDry Restoration,Restoration,"Houston, TX",81,Strong,"Slow insurance receivables",Receivables bridge,"Fronting labor, waiting 90 days on the carrier?"
Apex Roofing,Roofing,"Tampa, FL",84,Strong,"Storm demand + hiring",Working capital,"Crews booked through storm season?"
```

---

## 5. Rules for Batches

1. **Preserve input order** and number each business.
2. **Same fields for every row** — never skip columns, even if a value is "—" or "unknown."
3. **Disqualified leads stay in the output** marked `DQ` / out-of-scope — don't silently drop them (the user needs to see them to suppress).
4. **Keep hooks short** in table/CSV mode (one sentence) so they fit a cell.
5. **No follow-up questions** — make assumptions and process the whole list.
6. **Consistency beats flourish** — identical structure across all rows so downstream automation maps cleanly.
7. For very large batches, **table/CSV mode is preferred** to keep it usable.
