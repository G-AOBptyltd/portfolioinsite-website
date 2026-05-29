# PortfolioInSite Website — Claude Code Project Intelligence

> **Shared rules apply.** See `../.claude/rules/` for brand voice, git workflow, deployment, legal compliance, and API integration rules that govern all AOB repos. See `../CLAUDE.md` for the full AOB context, repo map, and Notion IDs.

## Project Identity

Marketing website for PortfolioInSite — an AI-native portfolio governance platform for Jira Cloud. **Product is live — no waitlist.** Stripe licensing active since 29 April 2026.

**Domain:** https://portfolioinsite.com.au
**GitHub:** https://github.com/G-AOBptyltd/portfolioinsite-website (public)
**Hosting:** Netlify (auto-deploys from main)
**Analytics:** Google Analytics G-EFMMW3Q8LK
**Brand colour:** Teal/cyan (#06b6d4)

## Product Context — 19 Modules

| Module | Name | Status | Tier |
|--------|------|--------|------|
| M01 | MoSCoW Scoring Engine | Built | FREE |
| M03 | Steering Committee Reports | Planned | PAID |
| M04 | Demand Intake Pipeline | Planned | PAID |
| M05 | Auto-Scoring Engine | Planned | PAID |
| M06 | Capacity & Demand | Planned | PAID |
| M07 | Health Scores & Decay | Planned | PAID |
| M08 | Investment Mix | Planned | PAID |
| M09 | Change Impact Tracking | Planned | PAID |
| M10 | Dependency Mapping | In UAT | PAID |
| M11 | Scenario Modelling | Planned | PAID |
| M12 | Stakeholder Voting | Planned | PAID |
| M14 | AI-Assisted Scoring (Claude API) | Planned | PAID |
| M15 | Notifications & Alerts | Planned | PAID |
| M16 | Data Import/Export | Planned | PAID |

**AI Differentiators:** M05 (Auto-Scoring) + M14 (Claude API) are the competitive moat — must be prominently featured.

## Tech Stack

- Static HTML/CSS/JS (no build tools)
- Fonts: Inter + Plus Jakarta Sans
- CMS: `js/notion-cms.js` (SITE_SLUG = 'portfolioinsite')
- Hosting: Netlify, CMS via Central API
- SEO: OG tags, Twitter cards, canonical URLs, structured data

## Tools (Standalone Web Apps)

| Path | Tool | Code |
|------|------|------|
| `/tools/portfolioinsite` | PortfolioInSite Web — executive portfolio dashboard | POI |
| `/tools/forecastinsite` | ForecastInSite — dependency mapping and critical path | FCT |
| `/tools/planinsite` | PlanInSite — PI planning and capacity management | PLN |

**Note:** SprintINSite and FlowInSite are hosted on sprintinsite.com, not here.

## Licensing & Checkout (Live)

- All InSite tools: **14-day free trial** (Stripe card required upfront)
- Trial badge: `TRIAL · XXd` (amber) → `LICENSED` (green) → `EXPIRED` (red)
- **"Start Free Trial"** → `/pricing` → redirects to `agilityops.com.au/pages/pricing`
- Stripe checkout → `checkout.session.completed` webhook → `stripe-webhook.js` auto-generates licence key → Resend emails key
- Licence key format: `TOOLCODE-CUSTOMERID-YYYYMMDD-HASH` (djb2)
- Stripe webhook destination: `we_1TRXId1yWUXkg4kiwkmSy3EE` (on agilityops-hub)
- Full technical reference: `ClaudeStripeResend.md` in AgilityOpsBizAI workspace

## CMS Integration

- **Site slug:** `portfolioinsite`
- **Product page:** `pages/product.html` — `?type=products&brand=portfolioinsite`
- **Content page:** `pages/content.html` — `?type=content&site=portfolioinsite`

## File Structure

```
portfolioinsite-website/
├── index.html              — Homepage (AI-native governance positioning)
├── css/styles.css
├── js/main.js
├── img/
│   ├── PortfolioInSite1.png, PiSSettings1.png, PiSscoring1.png
│   ├── PiSAutoScoreAI1.png, PiSPPipeline1.png, PiSHealthScore1.png
│   ├── PiSScenrioModel1.png (typo in filename — keep as-is)
│   ├── PiSInvestmentMix1.png
│   └── AOBLeaders.jpg, AOBGallupColab.jpg, AOBEvents.jpg
├── tools/
│   ├── portfolioinsite.html, forecastinsite.html, planinsite.html
└── pages/
    ├── product.html, content.html
    ├── features.html       — Module showcase with screenshots
    ├── how-it-works.html   — Installation/setup guide
    ├── docs.html
    ├── module.html          — Dynamic Jira module teaser (self-contained, inline JS)
    ├── forecastinsite-module.html    — ForecastInSite teaser (blue #0284c7)
    ├── forecastinsite-playbook.html  — ForecastInSite playbook (hpp-* CSS prefix)
    ├── planinsite-module.html        — PlanInSite teaser (amber #d97706)
    ├── portfolioinsite-web-module.html — PortfolioInSite Web teaser (purple #7c3aed)
    └── sla.html             — Service level agreement (local)
```

## InSite Suite Tools Detail

- **PlanInSite v3** (`/tools/planinsite`) — Jira CSV import, team velocity config, backlog refinement, PI loading board, dashboard. Dark/light theme, fully client-side.
- **ForecastInSite v4** (`/tools/forecastinsite`) — Lean Agile Financial Modelling (flagship)
- **PortfolioInSite Web** (`/tools/portfolioinsite`) — Portfolio Prioritisation & Health

## Netlify Forms

- Waitlist form: `waitlist` on `index.html`

## Image Guidelines

- Product screenshots: PNG, `PiS<ModuleName>.png` convention
- `object-fit: contain` (NOT `cover`), with `padding: 16px; background: #f8fafc;`
- Corporate photos: JPG
- Subpages: `../img/filename`

## Deployment History

- **May 25, 2026:** Seat enforcement live — FCT/PLN/POI tools now call `/api/licence-validate`. Added fingerprinting, async activation, fail-open. Verified 3-browser test on production.
- **May 20, 2026:** GA4 dedicated property G-EFMMW3Q8LK. og:image added.
- **May 19, 2026:** Suite homepage redesign — Products dropdown nav, module teasers, CTA routing fix, licence modal contact fix.
- **April 17, 2026:** Central API integration — notion-cms.js, product/content pages, netlify.toml.

## Key Learnings

- `PiSScenrioModel1.png` has a typo — keep filename to avoid broken references
- Module badge colours: cyan (#06b6d4) available, amber (#f59e0b) "In UAT", green (#10b981) platform
- Dependency Mapping M10 is in UAT — amber badge, not "available"
- **`pages/module.html` is self-contained** — nav JS must be inlined
- **`pages/forecastinsite-playbook.html`** — uses `hpp-*` CSS prefix, dropdown JS inlined
- **Licence modal contact:** All 3 tools show `support@agilityops.com.au` and link to `portfolioinsite.com.au/pricing`
- **Notion Pricing DB is empty** — pricing data is hardcoded in `aob-corporate-hub/pages/pricing.html` STRIPE_LINKS object
- **Bundle Stripe prices:** Must match pricing page calculation (30% off sum of 5 tools per tier). `tierLabelMap = {s:'starter', t:'team', b:'business', mb:'med-business'}`. Key format: `bundle_{tier}_{billing}`.
- **Stripe prices are immutable** — create new, archive old. Lookup keys reusable only after removing from old price first.
