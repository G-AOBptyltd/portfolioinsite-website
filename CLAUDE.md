# PortfolioInSite Website — Claude Code Project Intelligence

## Project Identity

Marketing website for PortfolioInSite, an AI-native portfolio governance platform for Jira Cloud. This site handles the product landing page, features showcase, documentation, privacy/terms, and waitlist conversion.

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
- **Fonts:** Inter + Plus Jakarta Sans (Google Fonts)
- **Styling:** Custom CSS with CSS variables, responsive grid
- **Hosting:** Netlify (auto-deploy from GitHub main branch)
- **SEO:** OG tags, Twitter cards, canonical URLs, structured data

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
└── pages/
    ├── features.html       — Module showcase with product screenshots
    ├── how-it-works.html   — Installation and setup guide
    ├── docs.html           — Documentation
    ├── privacy.html        — Privacy policy
    ├── terms.html          — Terms of service
    └── sla.html            — Service level agreement
```

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

## Related Repositories

| Repo | Purpose |
|------|---------|
| `PortfolioInSite` | The actual Forge app (private, JavaScript) |
| `aob-corporate-hub` | AOB corporate website |
| `sprintinsite-website` | Sibling product website |
| `Jira-Capacity-Point_TeamTracker` | Sibling product Forge app |

## Key Learnings

- Images were originally at repo root — moved to `/img/` directory March 2026
- `PiSScenrioModel1.png` has a typo ("Scenrio") — keep filename as-is to avoid broken references
- Features page uses alternating left/right layout for screenshot sections
- Module badge colours: cyan (#06b6d4) for available, amber (#f59e0b) for "In UAT", green (#10b981) for platform
- Dependency Mapping (M10) is in UAT — mark with amber badge, not "available"
- Strategic Quadrant Map is a future standalone module — not currently screenshotted
