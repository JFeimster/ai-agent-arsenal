# Fundable Lead Finder Landing Page

This folder contains the static landing page for **Fundable Lead Finder**, a Custom GPT / AI assistant that scores blue-collar service leads and generates no-BS funding outreach.

The page is intentionally static-first: plain `index.html`, `styles.css`, `script.js`, and `metadata.json`. No framework, no build step, no dependency circus. Drop it into a static host, wire the form when ready, and move.

## Purpose

The landing page positions Fundable Lead Finder as a practical lead-scoring and outreach tool for:

- Business loan brokers
- Commercial finance advisors
- Funding affiliates
- Referral partner teams
- Local service business prospectors
- Operators using Clay, Apollo, Instantly AI, HubSpot, or other CRM workflows

The page should sell the value without overclaiming. It should make the visitor understand:

> This tool helps you find funding-ready local service businesses before your competitors do, score them like a practical operator, and write outreach that does not sound like a generic lender blast.

## Included Files

| File | Purpose |
|---|---|
| `index.html` | Main static landing page structure and copy. |
| `styles.css` | Dark-luxe fintech styling, responsive layout, visual polish. |
| `script.js` | Lightweight UI behavior and demo lead-score interaction. |
| `metadata.json` | Page metadata for cataloging, deployment notes, and repo packaging. |
| `README.md` | This implementation guide. |

## Recommended Repo Path

```txt
ai-tools/custom-gpts/fundable-lead-finder/landing-page/
```

This landing page belongs with the Fundable Lead Finder source package, not in the public content profile. If the page is later promoted into a live example, a copy or build artifact may also be referenced from `examples/`, `assets/`, or a static-site directory depending on repo convention.

## Local Preview

Open `index.html` directly in a browser.

For a cleaner local static-server preview, use one of these:

```bash
python -m http.server 8080
```

Then open:

```txt
http://localhost:8080
```

Or with Node installed:

```bash
npx serve .
```

## Deployment Targets

This is plain static HTML/CSS/JS and can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Static S3 / object storage
- Any basic web host
- Embedded inside a Wix, Notion, or partner hub flow if needed

For Vercel, use static settings. No install command or build command is required unless the wider repo wrapper requires one.

## Page Positioning

Recommended headline direction:

> Find fundable local service leads before your competitors do.

Recommended sub-positioning:

> Fundable Lead Finder scores blue-collar businesses, spots funding trigger events, and writes practical outreach for brokers, affiliates, and commercial finance teams.

The page should feel:

- Fast
- Dark-luxe fintech
- Operator-grade
- Specific to blue-collar businesses
- Useful for brokers and affiliates
- Lead-magnet friendly
- Practical, not corporate

It should avoid:

- Bank compliance deck energy
- Generic AI SaaS copy
- Fake approval claims
- “Guaranteed funding” language
- Hype without operational specificity
- Cartoonish bro-marketing that kills trust

## Core Sections

A strong version of this page should include:

1. **Hero** — clear promise, CTA, lead-score visual, industry proof cues.
2. **Problem** — brokers waste time on cold, generic, low-fit leads.
3. **What It Does** — score leads, detect triggers, map product fit, write outreach.
4. **Interactive Demo** — lightweight score preview or lead-type selector.
5. **Use Cases** — brokers, affiliates, Clay/Apollo users, CRM teams.
6. **Knowledge Layer** — scoring rubric, trigger matrix, product fit matrix, voice guide.
7. **Compliance-Safe Positioning** — prospecting signal, not underwriting.
8. **CTA** — join waitlist, download prompt pack, request setup, or launch the GPT.

## Demo Behavior

The current `script.js` can power lightweight behaviors such as:

- Mobile navigation toggle
- Reveal animations
- Demo score calculation
- Demo form capture message
- Current year injection

The lead score demo is educational only. It should not imply actual underwriting, approval, or product eligibility.

## Form / CTA Notes

The form is demo-only unless connected to a backend.

Recommended production integrations:

- HubSpot form or embedded meeting link
- Tally form
- Airtable form
- ConvertKit / Beehiiv / MailerLite capture
- Supabase table endpoint
- n8n webhook
- Make.com webhook
- CRM intake workflow

Recommended fields:

- Name
- Email
- Company
- Role
- Lead source / use case
- CRM or workflow tool used
- Notes / requested access

## Metadata

`metadata.json` should capture:

- Tool name
- Slug
- Page type
- Target audience
- Primary CTA
- Recommended path
- Deployment type
- Compliance positioning
- Related package files
- Status

Use it as the landing page's package manifest, especially if this asset is later surfaced in a static directory UI.

## Compliance Guardrails

The landing page must clearly stay in prospecting-tool territory.

Do not claim:

- The tool approves financing.
- The tool predicts lender approval.
- Every scored business qualifies.
- Funding is guaranteed.
- Specific rates, terms, or amounts are available.
- The tool replaces underwriting or broker review.

Safe language:

- “Sales-opportunity score”
- “Prospecting signal”
- “Funding trigger analysis”
- “Possible product fit”
- “Worth reviewing”
- “Outreach prioritization”
- “CRM-ready lead intelligence”

Risky language:

- “Instant approval”
- “Guaranteed funding”
- “Pre-approved leads”
- “Know who qualifies”
- “No-doc approvals for everyone”
- “Funding decision engine”

## Suggested CTAs

Good CTA options:

- “Run a sample lead”
- “Download the prompt pack”
- “Get the GPT”
- “Score my lead list”
- “Build this into my CRM”
- “Request the broker setup”

Avoid hard-sell CTAs like:

- “Claim guaranteed approvals”
- “Get instant funding now”
- “Apply before it is too late”

## Design Direction

Recommended visual style:

- Dark charcoal / near-black base
- Amber, gold, electric blue, or neon green accents
- High-contrast cards
- Sharp gradients
- Scoreboard / scanner / radar visual motifs
- Local business, fleet, tools, trucks, routes, maps, and cash-flow symbols
- Clear CTAs above the fold

Avoid:

- Generic banker stock photos
- Overused AI robot imagery
- Smiling handshake clipart
- Sterile fintech dashboard clutter
- Overly playful visuals that weaken trust

## Production Checklist

Before deploying publicly:

- [ ] Confirm `index.html` links correctly to `styles.css` and `script.js`.
- [ ] Confirm `metadata.json` is valid JSON.
- [ ] Replace demo form behavior with real capture backend.
- [ ] Add final CTA URL.
- [ ] Add analytics if needed.
- [ ] Add Open Graph image or thumbnail.
- [ ] Confirm mobile layout.
- [ ] Confirm compliance copy is visible enough.
- [ ] Test all buttons and anchor links.
- [ ] Confirm no placeholder copy remains.

## Future Enhancements

Possible Batch 2 upgrades:

- Full lead-score calculator
- Downloadable lead-scoring worksheet
- Tally/HubSpot embedded intake form
- CRM field-mapping preview
- Clay workflow embed or screenshot section
- Prompt-pack download CTA
- GPT launch button
- Case-study style examples
- Industry-specific landing page variants for roofing, HVAC, trucking, and restoration
- Partner/affiliate version of the page

## Status

Current status: **Static starter landing page**

The page is ready for local preview and repo packaging. Production deployment should wait until the form/CTA target and analytics decision are finalized.
