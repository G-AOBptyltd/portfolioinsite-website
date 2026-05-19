# ForecastInSite GPT Master Prompt

Use this prompt whenever asking an AI assistant to design, extend, review, or rebuild ForecastInSite.

---

## Product Context

You are helping build **ForecastInSite**, part of the **InSite / PortfolioInSite product suite** by Agility Ops Business. ForecastInSite is a single-file, design-forward HTML application used to understand the **true cost, capacity, value, forecast risk, and delivery health** of portfolio and project work.

The product should help leaders answer:

- Can we afford this work?
- Are we funding the right work?
- Are teams over capacity?
- What is the true cost of delivery?
- What value are we getting from the investment?
- What dependencies, risks, and issues are threatening delivery?
- What needs escalation?
- What happens if funding, scope, capacity, or timelines change?

ForecastInSite should be useful for three primary roles:

1. **Financial Controller**
2. **Portfolio Manager**
3. **Project Manager / Delivery Manager**

The product positioning is:

> **ForecastInSite helps leaders understand the true cost, capacity, value, and forecast risk of delivery work.**

---

## Core Design Principles

When modifying or expanding ForecastInSite:

- Keep it usable as a **single-file HTML app** unless otherwise requested.
- Preserve a clean, executive-friendly, dark-mode-first UI.
- Maintain role-based views so each user sees what matters to them.
- Prefer practical dashboards, tables, registers, and exportable reports over abstract diagrams.
- Use plain business language, not overly technical language.
- Make it commercially useful for portfolio, finance, and delivery governance.
- Make sample data realistic enough to demonstrate enterprise use cases.
- Ensure formulas are transparent and explainable.
- Avoid fake sophistication: every metric should be traceable to data.
- Support Lean Agile, SAFe-style portfolio governance, and project management environments.

---

## Role-Based Product Model

ForecastInSite must support three role modes.

### 1. Financial Controller

The Financial Controller view should answer:

- Can we afford this?
- Are we within budget?
- What is the actual spend?
- What is the forecast spend?
- What is the variance?
- Is the spend Capex or Opex?
- Which cost centres and GL codes are impacted?
- What has changed since the approved baseline?
- What is the finance risk?
- What needs accrual, recharge, or executive explanation?

### 2. Portfolio Manager

The Portfolio Manager view should answer:

- Are we funding the right work?
- Are strategic goals being funded?
- Which epics/features should be prioritised?
- What value is being delivered?
- What is the portfolio roadmap?
- What dependencies exist across teams?
- Which work should stop, start, continue, defer, or accelerate?
- What trade-offs are available?
- What is the overall portfolio health?

### 3. Project Manager / Delivery Manager

The Project Manager view should answer:

- Are we delivering as planned?
- What is blocked?
- What milestones are at risk?
- What risks, issues, actions, decisions, assumptions, and dependencies need attention?
- What changed this week?
- What should be escalated?
- What is the delivery forecast?
- What is the status narrative for executives?

---

## Required Navigation / Tabs

ForecastInSite should include these major sections:

1. **Command Centre**
2. **Teams & Capacity**
3. **Budget & Actuals**
4. **Feature Economics**
5. **Value Stream**
6. **Productivity**
7. **AI Workforce**
8. **Licences & Overhead**
9. **Relative Sizing**
10. **Reporting**
11. **Capacity Planner**
12. **Roadmap & Dependencies**
13. **RAID & Delivery**
14. **Scenarios & Controls**
15. **Configuration**

If the application is being simplified, do not remove the intent of these modules. Combine them only when it improves usability.

---

## Financial Controller Requirements

The Financial Controller view must include:

### Financial Dashboard

- Total approved budget
- Revised budget
- Actual spend
- Forecast spend
- Committed spend
- Accrual estimate
- Remaining budget
- Forecast to complete
- Estimate at completion
- Variance to original budget
- Variance to revised budget
- Forecast accuracy
- Forecast confidence
- RAG status

### Monthly Finance Controls

Support month-by-month tracking for:

- Budget
- Actuals
- Forecast
- Accruals
- Committed spend
- Remaining budget
- Variance
- Finance commentary

### Capex / Opex

Every feature, epic, budget item, and investment line should support:

- Spend type: `Capex`, `Opex`, or `Mixed`
- Capex percentage
- Opex percentage
- Capitalisation rationale
- Asset / product reference
- Useful life assumption if relevant

### Cost Centre / GL / Recharge

Add support for:

- Cost centre
- GL code
- Vendor
- Purchase order number
- Invoice reference
- Recharge entity
- Business unit
- Funding source
- Product / platform allocation

### Budget Baselines

Support:

- Original approved budget
- Revised approved budget
- Current forecast
- Actuals
- Forecast movement
- Change reason
- Approval status
- Approved by
- Approved date

### Finance Governance

Add:

- Forecast confidence: `High`, `Medium`, `Low`
- Approval status: `Draft`, `Submitted`, `Approved`, `Rejected`
- Last updated by
- Last updated date
- Change reason
- Audit trail
- Version history

### Finance Exports

The tool should export:

- Budget vs actuals report
- Capex/Opex report
- Cost centre report
- GL mapping report
- Forecast movement report
- Licence/vendor report
- Team run-rate report
- Executive finance summary
- CSV and JSON backup formats

---

## Portfolio Manager Requirements

The Portfolio Manager view must include:

### Portfolio Command Centre

- Value delivered
- Features completed
- Benefits realised
- Portfolio ROI
- Average cost per feature
- Forecast value
- Cost of delay exposure
- Portfolio health score
- Strategic alignment score
- Dependency health
- Capacity health
- Risk health

### Roadmap View

Support:

- Now / Next / Later
- PI view
- Quarter view
- Financial year view
- Feature/epic roadmap
- Team roadmap
- Strategic theme roadmap
- Dependency overlay
- Budget overlay
- Capacity overlay

### Strategic Alignment

Each feature or epic should support:

- Strategic theme
- OKR
- Business outcome
- Investment category
- Mandatory / discretionary
- Regulatory / growth / efficiency / risk reduction
- Business owner
- Benefit owner
- Funding source

### Prioritisation

Support a prioritisation cockpit using:

- WSJF
- MoSCoW
- RICE
- Business value
- Cost of delay
- Risk reduction
- Time criticality
- Effort
- Confidence
- Funding availability
- Capacity availability

The tool should be able to produce a recommended ranked backlog.

### Trade-Off Analysis

The Portfolio Manager must be able to answer:

- If we fund this, what do we delay?
- If we add this epic, which team becomes overloaded?
- If budget reduces by 10%, what should stop?
- If we need to hit a fixed date, what scope should drop?
- What value is lost by deferring work?
- Which initiatives are low-value but high-cost?
- Which initiatives are high-value but blocked?

### Benefits Realisation

Support benefit types:

- Revenue uplift
- Cost reduction
- Risk reduction
- Compliance benefit
- Customer experience
- Operational efficiency
- Strategic enablement
- Platform reuse

Each benefit should track:

- Expected benefit
- Actual benefit
- Benefit owner
- Benefit start date
- Benefit confidence
- Realisation status
- Commentary

### Portfolio Health Score

Create an executive score based on:

- Budget health
- Delivery health
- Dependency health
- Capacity health
- Value health
- Risk health
- Forecast confidence

---

## Project Manager / Delivery Manager Requirements

The Project Manager view is essential and must be included.

### PM Command Centre

Show:

- Delivery RAG
- Timeline status
- Budget status
- Scope status
- Quality status
- Open risks
- Open issues
- Open decisions
- Open dependencies
- Milestones due soon
- Blockers needing escalation
- This week / next week summary

### RAID Log

Add a full RAID module covering:

- Risks
- Assumptions
- Issues
- Dependencies
- Decisions
- Actions

Each RAID item should include:

- ID
- Type
- Title
- Description
- Owner
- Due date
- Status
- RAG
- Impact
- Likelihood
- Mitigation
- Escalation required
- Linked feature/epic/team
- Date raised
- Date closed
- Commentary

### Milestone Tracker

Track:

- Milestone name
- Planned date
- Forecast date
- Actual date
- Variance
- Owner
- Status
- Dependency
- Impact if missed
- Linked feature/epic/team

### Delivery Plan

Track:

- Feature
- Start date
- End date
- Team
- Status
- Percentage complete
- Sprint / PI
- Key dependency
- Delivery risk
- Delivery confidence

### Sprint / Iteration Execution

Track:

- Sprint commitment
- Sprint completed
- Spillover
- Blocked work
- Carry-over percentage
- Scope added mid-sprint
- Scope removed
- Team confidence
- Sprint goal status

### Scope Change Control

Track:

- Change request
- Reason
- Impact on cost
- Impact on timeline
- Impact on scope
- Impact on benefits
- Approval status
- Approved by
- Date approved

### Weekly PM Report Generator

Generate a weekly report containing:

- Overall status: Green / Amber / Red
- What changed this week
- What was completed
- What is next
- Key risks
- Key issues
- Decisions needed
- Budget position
- Timeline position
- Dependency concerns
- Executive ask

### Escalation View

Highlight:

- Blocked work older than 5 days
- Budget variance greater than 10%
- Overdue dependencies
- Milestone slippage
- Feature with no owner
- High-value work with low confidence
- Team over capacity
- Risk without mitigation
- Decision overdue

---

## Dependency Mapping Requirements

The product title and value proposition must align with dependency mapping.

Add a proper dependency register with:

- Dependency ID
- From feature / team / epic
- To feature / team / epic / vendor / platform
- Dependency type
- Owner
- Due date
- Status
- RAG
- Blocking impact
- Linked milestone
- Escalation required
- Commentary

Dependency types should include:

- Team-to-team
- Feature-to-feature
- External vendor
- Governance approval
- Architecture decision
- Data dependency
- Platform dependency
- Security / risk approval
- Environment readiness
- Release dependency

Show dependency health in:

- Portfolio command centre
- PM command centre
- Roadmap view
- RAID & Delivery view

---

## Scenario Modelling Requirements

Add a scenario mode for:

- Base case
- Best case
- Worst case
- Executive target case
- Budget reduction case
- Capacity constrained case
- Fixed date case

Scenarios should support:

- Budget adjustment percentage
- Capacity adjustment percentage
- Rate increase percentage
- Delivery delay percentage
- Scope reduction percentage
- Benefit adjustment percentage
- AI productivity uplift percentage

For each scenario, calculate:

- Forecast cost
- Forecast value
- Forecast ROI
- Capacity impact
- Timeline impact
- Benefits impact
- Delivery confidence
- Work to stop / defer / accelerate

---

## Data Model Requirements

The data model should support these core entities.

### Team

- ID
- Name
- Type: Scrum / Kanban / Support / Platform / Project
- Sprint capacity
- PI capacity
- Monthly run rate
- Cost centre
- Business unit
- Product area
- Owner

### Member

- ID
- Name
- Role
- Employment type: FTE / Contractor / Consultant / AI Agent
- Cost rate
- Cost frequency: Daily / Monthly / Annual
- FTE percentage
- Team ID
- Start date
- End date
- AI licence cost
- AI compute cost
- AI productivity multiplier

### Feature / Epic

- ID
- Name
- Type
- Team ID
- Owner
- Status
- Story points
- PI assignment
- Start date
- End date
- Business value
- WSJF score
- RICE score
- MoSCoW priority
- Projected revenue
- Actual revenue
- Expected benefit
- Actual benefit
- Benefit type
- Benefit owner
- OKR target
- OKR actual
- Strategic theme
- Investment category
- Actual cost
- Forecast cost
- Spend type: Capex / Opex / Mixed
- Capex percentage
- Opex percentage
- Cost centre
- GL code
- Forecast confidence
- Delivery confidence
- Is deferred
- Deferred value
- Is innovation

### Budget

- ID
- Period
- Period type: Month / PI / Quarter / FY
- Team ID
- Feature ID
- Original approved budget
- Revised budget
- Budgeted amount
- Actual amount
- Forecast amount
- Committed spend
- Accrual amount
- Remaining budget
- Spend type
- Cost centre
- GL code
- Vendor
- PO number
- Invoice reference
- Approval status
- Forecast confidence
- Notes

### Licence / Vendor

- ID
- Name
- Vendor
- Cost model: Per-seat / Usage / Fixed / Hybrid
- Unit cost
- Seats
- Usage
- Renewal date
- Assigned teams
- Assigned roles
- Is shared
- Apportionment method: Equal / Headcount / Story-point weighted / Cost weighted
- Contract owner
- Renewal risk

### AI Agent

- ID
- Name
- Type
- Cost model
- Monthly licence cost
- Usage cost per unit
- Average monthly usage
- Team ID
- Replaces or augments role
- Productivity multiplier
- Risk rating
- Governance owner

### RAID Item

- ID
- Type: Risk / Assumption / Issue / Dependency / Decision / Action
- Title
- Description
- Owner
- Due date
- Status
- RAG
- Impact
- Likelihood
- Mitigation
- Escalation required
- Linked feature
- Linked team
- Created date
- Closed date

### Milestone

- ID
- Name
- Planned date
- Forecast date
- Actual date
- Variance
- Owner
- Status
- RAG
- Dependency
- Impact if missed
- Linked feature
- Linked team

### Scenario

- ID
- Name
- Type
- Budget adjustment percentage
- Capacity adjustment percentage
- Rate increase percentage
- Delivery delay percentage
- Scope reduction percentage
- Benefit adjustment percentage
- AI productivity uplift percentage
- Notes

---

## Calculation Requirements

### Cost Per Point

Cost per point must be calculated transparently and correctly.

Preferred formula:

```text
monthly story point capacity = sprint capacity × sprints per month
cost per point = monthly run rate ÷ monthly story point capacity
```

If sprint length is 2 weeks:

```text
sprints per month = 4.33 ÷ 2 = 2.165
```

So:

```text
monthly story point capacity = sprint capacity × 2.165
cost per point = monthly run rate ÷ monthly story point capacity
```

Do not simplify the calculation in a way that ignores team sprint capacity.

### Monthly Run Rate

For daily rates:

```text
monthly cost = daily rate × working days per month × FTE percentage
```

Default working days per month should be configurable, with 21 or 22 as common defaults.

For monthly rates:

```text
monthly cost = monthly rate × FTE percentage
```

For annual rates:

```text
monthly cost = annual rate ÷ 12 × FTE percentage
```

### Fully Loaded Cost

Fully loaded team cost should include:

- Member cost
- Contractor / consultant cost
- AI licence cost
- AI compute cost
- Shared licence allocation
- Platform cost allocation
- Employment overhead
- Vendor cost allocation where applicable

### Budget Variance

```text
variance = actual - budget
variance percentage = variance ÷ budget
```

Show favourable/unfavourable clearly.

### Forecast Accuracy

```text
forecast accuracy = 1 - absolute(actual - forecast) ÷ forecast
```

### ROI

```text
ROI = (actual benefit or value - actual cost) ÷ actual cost
```

### Value Realisation

```text
value realisation = actual benefit ÷ expected benefit
```

### Scenario Forecast Cost

Scenario forecast cost should adjust base forecast by:

- Rate changes
- Capacity changes
- Delivery delay
- Scope change
- AI productivity uplift
- Licence/vendor changes

---

## Known Issues to Avoid

Do not repeat these problems:

### Cost Per Point Bug

Avoid calculations where:

```text
pointsPerMonth = (team.sprintCapacity × 4.33) ÷ team.sprintCapacity
```

This incorrectly simplifies to 4.33 and ignores actual capacity.

### Field Inconsistency

Use consistent field names across sample data, calculations, and rendering.

Preferred member fields:

- `employmentType`
- `costRate`
- `costFrequency`
- `ftePercentage`

Do not mix these with old fields unless migration logic is included:

- `type`
- `rate`
- `rateType`
- `fte`
- `allocation`

### Licence Calculation Gaps

If licence calculations use seats or usage, ensure the data model includes:

- `seats`
- `usage`
- `unitCost`
- `costModel`

### AI Workforce Calculation Gaps

AI workforce calculations must use the same cost fields as member calculations.

---

## Import / Export Requirements

The tool should support:

### Import

- JSON backup
- CSV feature import
- CSV budget import
- CSV team/member import
- CSV RAID import
- CSV dependency import
- PortfolioInSite browser storage import
- Jira export import
- Jira Advanced Roadmaps export import
- Tempo export import
- Finance system CSV import

### Export

- JSON full backup
- CSV features
- CSV budgets
- CSV teams
- CSV RAID
- CSV dependencies
- CSV milestones
- Finance controls export
- Portfolio summary export
- PM weekly status report
- Executive summary report

---

## Enterprise Integration Targets

Future versions should consider connectors or import templates for:

- Jira
- Jira Advanced Roadmaps
- Tempo
- Xero
- MYOB
- NetSuite
- SAP
- ServiceNow
- Power BI
- Confluence
- GitHub
- Azure DevOps

---

## Executive Reporting Requirements

ForecastInSite should produce executive-ready summaries.

### Financial Controller Report

Include:

- Budget position
- Actual spend
- Forecast spend
- Variance
- Capex/Opex split
- Cost centre view
- Forecast confidence
- Accruals
- Committed spend
- Key finance risks
- Required decisions

### Portfolio Manager Report

Include:

- Portfolio health
- Value delivered
- Benefits realised
- Strategic alignment
- Prioritisation changes
- Dependency risks
- Capacity constraints
- Trade-off recommendations
- Stop/start/continue recommendations

### Project Manager Report

Include:

- Overall delivery RAG
- Completed this week
- Planned next week
- Key risks
- Key issues
- Key dependencies
- Key decisions
- Milestone movement
- Budget/timeline/scope status
- Escalations required

---

## UX Requirements

- Use role-based command centres.
- Use clear RAG indicators.
- Make tables searchable and filterable.
- Keep key cards at the top of each view.
- Use charts only where they clarify decision-making.
- Avoid cluttered dashboards.
- Allow demo data reset.
- Allow sample data load.
- Preserve dark/light/system theme support.
- Keep buttons and tabs clear.
- Ensure forms validate required fields.
- Use plain English help text.

---

## Commercial Product Expectations

For commercial readiness, ForecastInSite should feel like:

- A finance governance cockpit
- A portfolio prioritisation tool
- A delivery risk and escalation tool
- A scenario modelling tool
- A lightweight executive reporting tool

It should not feel like only a demo dashboard.

The product becomes valuable when it connects:

```text
Work → Teams → Capacity → Cost → Budget → Forecast → Value → Risk → Decision
```

---

## Suggested Build Priorities

When asked to improve ForecastInSite, prioritise in this order:

1. Fix the core data model and calculation issues.
2. Add or improve the Project Manager / Delivery Manager role.
3. Add financial governance depth: Capex/Opex, cost centres, GL, baseline, forecast confidence.
4. Add roadmap and dependency mapping.
5. Add RAID, milestones, and delivery reporting.
6. Add scenario modelling.
7. Add exportable finance, portfolio, and PM reports.
8. Add enterprise import templates and integrations.
9. Improve visual polish and usability.
10. Add advanced analytics and AI-assisted recommendations.

---

## Standard Prompt to Use

When asking an AI to update ForecastInSite, use this structure:

```text
You are helping me improve ForecastInSite, a single-file HTML app in the InSite / PortfolioInSite product suite.

Use the ForecastInSite requirements from this file as the product standard.

Please update the attached HTML file while preserving the single-file structure, existing visual style, sample data, localStorage persistence, import/export behaviour, and role-based navigation.

Focus on:
[insert specific change]

Make sure the change supports the three user roles:
- Financial Controller
- Portfolio Manager
- Project Manager / Delivery Manager

Before editing, identify any existing calculation, field naming, or data model issues that may affect the change. Then update the file and provide the revised downloadable HTML.
```

---

## Quality Checklist

Before considering a ForecastInSite update complete, check:

- Financial Controller needs are covered.
- Portfolio Manager needs are covered.
- Project Manager needs are covered.
- Cost per point formula is correct.
- Field names are consistent.
- Capex/Opex is supported.
- Cost centre and GL mapping are supported.
- Dependencies are modelled properly.
- RAID and milestones exist.
- Scenario modelling exists.
- Exports are practical.
- Sample data demonstrates the feature.
- The app still works as a standalone HTML file.
- The visual style is preserved.
- No tab or role breaks existing functionality.

---

## One-Line Product Definition

**ForecastInSite is an executive-friendly forecasting and governance tool that connects Agile delivery work to cost, capacity, value, risk, dependencies, and financial control.**
