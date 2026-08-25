# ForecastInSite Demo Sample Pack — "What Good Looks Like"

Fully synthetic demo data for [ForecastInSite](https://portfolioinsite.com.au/tools/forecastinsite).
Every company, team, person, project key and number in this pack is invented —
the *shape* mirrors a real enterprise portfolio (Fibonacci epic sizing,
Theme → Initiative → Epic hierarchy, mixed internal/partner squads, quarterly
PI cadence) without any real-world identifiers.

**Storyline:** Harbour Financial Group (HFG), a fictional Australian non-bank
lender, is two PIs into a Digital Lending Transformation portfolio — four
themes (Origination, Self-Service, Data & Risk, Compliance), five internal
squads (Aurora, Kestrel, Compass, Beacon, Marlin) plus one external partner
squad (Northwind [EXT]), running PIs 26.1–26.4 across calendar 2026.

## Files

| File | What it is |
|------|-----------|
| `forecastinsite-sample-jira-export.csv` | Jira-style export, 73 rows: 4 Themes, 8 Initiatives/SAFe Epics, 55 Epics/Features, plus 6 Story/Task/Bug rows that the importer deliberately skips |
| `forecastinsite-sample-full-state.json` | Complete ForecastInSite backup: the same 55 features **with teams assigned**, plus members and cost rates, PI budgets, 4 PIs of velocity history, licences, AI agents, RAID log, milestones, dependencies and scenarios |

## Two ways to use it

**Option A — fully lit-up demo (fastest).**
Open ForecastInSite → Import → **JSON** → load
`forecastinsite-sample-full-state.json` → Import. Every tab (teams, budgets,
forecast, velocity, RAID, roadmap, scenarios) is populated immediately.

**Option B — the customer import journey (best for learning).**
Start from a clean state → Import → **Jira CSV** → load
`forecastinsite-sample-jira-export.csv`. The preview should read
**"67 portfolio items imported, 6 items skipped"** — the skipped rows are the
Story/Task/Bug lines, which is exactly what a customer sees with a real
export. Then assign teams, set capacities and add budgets by hand. This is
the flow to practise before running a client onboarding.

## What to look at once loaded

- **Capacity vs demand:** Northwind [EXT] is committed at 102 of 100 points in
  PI 26.3 — the over-committed partner squad is the intended conversation
  starter.
- **Velocity:** all squads have four completed PIs (PI 25.3 → PI 26.2) with a
  gentle upward trend, so forecasts have a defensible baseline.
- **Budgets:** closed PIs carry reconciled actuals, PI 26.3 shows partial
  actuals at sprint 3, PI 26.4 is forecast-only — plus two quarterly
  portfolio roll-ups (Q1/Q2 FY27).
- **RAID and dependencies:** one Red item (instant-funding vendor sign-off)
  flows through RAID → dependencies → the Amber milestone, showing how the
  tabs connect.
- **Backlog hygiene:** six "Won't Have" items with deferred value, two
  deferred features and four innovation-flagged features exercise the
  deferred-value and innovation views.

## Conventions the data follows

- Issue keys: `PORT-x` (portfolio level), `LEND-1xx` (delivery level),
  `LEND-9xx` (execution level, skipped on import).
- PI labels: `PI 26.1` … `PI 26.4` (calendar 2026, PI start 5 Jan 2026);
  financial year labels use `Q1 FY27` = Jul–Sep 2026 (July FY start).
- Story points are epic-scale Fibonacci-ish (18–89); statuses are the tool's
  native set (To Do / In Progress / Done).
- Currency AUD; daily cost rates.

> Regeneration: this pack is emitted by a deterministic script — if the
> ForecastInSite import model changes, regenerate rather than hand-editing so
> the CSV and JSON stay consistent with each other.
