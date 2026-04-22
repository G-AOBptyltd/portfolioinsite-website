# PortfolioInSite Website — Claude Code Project Intelligence

## Project Identity

Marketing website for PortfolioInSite, an AI-native portfolio governance platform for Jira Cloud. This site handles the product landing page, features showcase, documentation, and waitlist conversion. Legal pages (Privacy Policy, Terms of Service) are hosted on the parent company site at agilityops.com.au.

**Owner:** Agility Ops Business Pty Ltd (AOB)
**Domain:** https://portfolioinsite.com.au
**GitHub:** https://github.com/G-AOBptyltd/portfolioinsite-website
**Visibility:** Public repo
**Hosting:** Netlify (auto-deploys from main branch)
**Analytics:** Google Analytics G-LLJ1KPTDMK
**Parent brand:** https://agilityops.com.au

## Product Context

PortfolioInSite is a 19-module portfolio governance platform built on Atlassian Forge. The website describes the full product vision — not just what's built today.

**Live website exists** — NEVER mark as "Coming Soon" on any AOB property.

**Module Architecture (19 modules, 5 build phases):**

| Module | Name | Status | Tier |
|--------|------|--------|------|
| M01 | MoSCoW Scoring Engine | ✅ Built | FREE |
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

**AI Differentiators (lead positioning):**
- M05 (Auto-Scoring) + M14 (Claude API) are the competitive moat
- These must be prominently featured, not buried
- Positioning: "AI-native portfolio governance"

## Tech Stack

- **Framework:** Static HTML/CSS/JS (no build tools)
- **CMS:** Notion via AOB Central API (`https://api.agilityops.com.au/api/cms`)
- **CMS Client:** `js/notion-cms.js` v2 (fetches from central API, SITE_SLUG = 'portfolioinsite')
- **Fonts:** Inter + Plus Jakarta Sans (Google Fonts)
- **Styling:** Custom CSS with CSS variables, responsive grid
- **Hosting:** Netlify (auto-deploy from GitHub main branch)
- **SEO:** OG tags, Twitter cards, canonical URLs, structured data

## Central API Integration (April 2026)

This site is connected to the AOB Centralised Payment Platform via the shared central API. Products and content are managed in Notion and served via brand-scoped API calls.

**Key files:**
- `js/notion-cms.js` — CMS client (SITE_SLUG = 'portfolioinsite')
- `pages/product.html` — Dynamic product detail page (brand-scoped: `?type=products&brand=portfolioinsite`)
- `pages/content.html` — Dynamic content detail page (site-scoped: `?type=content&site=portfolioinsite`)
- `netlify.toml` — SPA redirects (`/product/*`, `/content/*`) + API proxy (`/api/cms`)

**How brand-scoped filtering works:**
- Products API: `?type=products&brand=portfolioinsite` returns only products whose Brand relation in Notion points to the PortfolioInSite site
- Content API: `?type=content&site=portfolioinsite` returns only content assigned to PortfolioInSite
- Each site only shows its own branded content — centralise, reuse, simplify

**API proxy in netlify.toml:**
- `/api/cms` → `https://api.agilityops.com.au/api/cms` (status 200, force)
- Central API also has dynamic CORS from Sites DB (Domain must include `https://` prefix)

## Deployment (CRITICAL)

- **GitHub connector NOT available** in Claude AI — all deployments via manual paste
- **Always provide .txt files** for HTML content to prevent browser auto-rendering during copy/paste
- **Naming convention:** `<page>-PASTE-THIS.txt`
- **Process:** Open raw .txt in text editor → Select all → Paste into GitHub web editor → Commit to main → Netlify auto-deploys
- **Git conflicts:** If push rejected, run `git pull --rebase origin main` then `git push origin main`

## R&D Language Rules (MANDATORY)

- **NEVER use:** "R&D-backed" (implies funding secured)
- **ALWAYS use:** "Methodology under active R&D development" or "Developed within our R&D program"
- R&D Tax Incentive application is in progress — not approved

## File Structure

```
portfolioinsite-website/
├── index.html              — Homepage (AI-native governance positioning)
├── css/
│   └── styles.css          — Main stylesheet
├── js/
│   └── main.js             — Interactions, animations
├── img/                    — All images (moved from root March 2026)
│   ├── PortfolioInSite1.png    — Product hero shot
│   ├── PiSSettings1.png        — 19-module settings view
│   ├── PiSscoring1.png         — MoSCoW scoring interface
│   ├── PiSAutoScoreAI1.png     — AI-assisted scoring (Claude API)
│   ├── PiSPPipeline1.png       — Demand intake pipeline
│   ├── PiSHealthScore1.png     — Health scores dashboard
│   ├── PiSScenrioModel1.png    — Scenario modelling (note: typo in filename, keep as-is)
│   ├── PiSInvestmentMix1.png   — Investment mix allocation
│   ├── AOBLeaders.jpg          — Corporate team photo
│   ├── AOBGallupColab.jpg      — Partnership photo
│   ├── AOBEvents.jpg           — Events photo
│   └── FACT/                   — FACT brand images
├── tools/
│   └── planinsite.html     — PlanInSite v3: PI Planning & Capacity Management (standalone tool)
└── pages/
    ├── product.html        — Dynamic product detail (central API)
    ├── content.html        — Dynamic content detail (central API)
    ├── features.html       — Module showcase with product screenshots
    ├── how-it-works.html   — Installation and setup guide
    ├── docs.html           — Documentation
    ├── privacy.html        — Local privacy policy (DEPRECATED — footer now links to agilityops.com.au)
    ├── terms.html          — Local terms (DEPRECATED — footer now links to agilityops.com.au)
    └── sla.html            — Service level agreement (still local)
```

## InSite Suite Tools (Updated April 2026)

InSite Suite tools are hosted as standalone HTML apps under `/tools/`. This site (portfolioinsite.app) hosts ForecastInSite, PlanInSite, and PortfolioInSite web tools.

- **PlanInSite v3** (`/tools/planinsite`) — PI Planning & Capacity Management
  - Import Jira/Advanced Roadmaps CSV data
  - Team velocity and capacity configuration
  - Backlog refinement with MoSCoW filtering
  - PI loading board with sprint allocation
  - Dashboard with analytics and charts
  - Dark/light theme, fully client-side (no backend)

- **ForecastInSite v4** (`/tools/forecastinsite`) — Lean Agile Financial Modelling (flagship)
- **PortfolioInSite web** (`/tools/portfolioinsite`) — Portfolio Prioritisation & Health (web standalone)

**Note:** SprintInSite and FlowInSite are hosted on sprintinsite.com, not here.

## Image Guidelines

- **Product screenshots:** PNG, `PiS<ModuleName>.png` naming convention
- **Screenshot requirements:** Full browser width, no OS chrome, no bookmarks bar, realistic data
- **CSS for screenshots:** `object-fit: contain` (NOT `cover`) — prevents cropping UI content. Add `padding: 16px; background: #f8fafc;` for clean presentation
- **Corporate photos:** JPG format
- **From subpages:** Reference as `../img/filename`

## Brand Alignment

- Visual design must match agilityops.com.au corporate style
- Colour: Teal/cyan (#06b6d4) for PortfolioInSite brand
- Link back to parent brand: agilityops.com.au
- Cross-link to sibling products: SprintINSite, FACT

## Deployment History

- **April 17, 2026:** Central API integration — added `js/notion-cms.js`, `pages/product.html`, `pages/content.html`, created `netlify.toml` with SPA redirects and API proxy. Part of AOB Centralised Payment Platform Phase 1.

## Related Repositories

| Repo | Purpose |
|------|---------|
| `PortfolioInSite` | The actual Forge app (private, JavaScript) |
| `aob-api` | Central API serving all AOB sites (Netlify Functions) |
| `aob-corporate-hub` | AOB corporate website |
| `fastact-website` | FACT Training website (first site on central API) |
| `sprintinsite-website` | Sibling product website |
| `Jira-Capacity-Point_TeamTracker` | Sibling product Forge app |

## Legal Pages (Updated 6 March 2026)

- **Privacy Policy and Terms of Service** are now served from the parent company site: `https://agilityops.com.au/pages/privacy.html` and `https://agilityops.com.au/pages/terms.html`
- Footer links use `target="_blank"` to open in new tab
- Local `pages/privacy.html` and `pages/terms.html` still exist in the repo but are deprecated — footer no longer links to them
- **SLA** (`pages/sla.html`) remains local to this site

## Netlify Forms (Updated 6 March 2026)

- Waitlist form on `index.html` uses **Netlify Forms** with `data-netlify="true"` attribute
- Form name: `waitlist`
- **Setup requirement:** Form detection must be enabled in Netlify dashboard and a redeploy triggered after enabling
- Form handler in `js/main.js` uses `fetch()` POST with `x-www-form-urlencoded` encoding

## Key Learnings

- CORS: Central API Sites DB Domain field must include `https://` prefix for dynamic CORS to work
- Central API has 5-minute in-memory cache TTL
- Brand-scoped filtering: products use `brand=` param, content uses `site=` param (interchangeable in API)
- Images were originally at repo root — moved to `/img/` directory March 2026
- `PiSScenrioModel1.png` has a typo ("Scenrio") — keep filename as-is to avoid broken references
- Features page uses alternating left/right layout for screenshot sections
- Module badge colours: cyan (#06b6d4) for available, amber (#f59e0b) for "In UAT", green (#10b981) for platform
- Dependency Mapping (M10) is in UAT — mark with amber badge, not "available"
- Strategic Quadrant Map is a future standalone module — not currently screenshotted
- **Legal page consolidation (6 Mar 2026):** Local privacy/terms pages had placeholder content (e.g. `[ABN Placeholder]`). Simplified by pointing footer links to the canonical pages on agilityops.com.au

## Workflow Preferences

- **GitHub uploads:** If bulk file uploads or image uploads to GitHub are needed, ask the user to do it directly — provide the file list and instructions rather than attempting complex browser-based uploads
- **Test branches:** ALWAYS create a test branch for every website before making changes to `main`. Never commit directly to `main` — use a branch, verify, then merge. This prevents accidental breakage on live sites
- **Deployment .txt files:** When GitHub connector isn't available, provide `<page>-PASTE-THIS.txt` files for manual paste into GitHub web editor
