# Plan: AI Evals + DORA + Team Performance KPIs (Eventbrite Supply)

## Purpose

Create a lightweight evaluation layer that connects AI adoption changes to delivery outcomes, starting with DORA metrics and expanding to complementary team KPIs that Supply teams already care about.

## Principles

1. **Measure outcomes, not tool usage.** Tool usage is an input signal, not success.
2. **Prefer controlled comparisons.** Same team over time is acceptable early, cohort comparisons are better when feasible.
3. **Keep cost low.** Reuse existing systems of record (VCS, CI, incident tooling) before building new pipelines.
4. **Make decisions reversible.** Every eval should have a clear stop condition if quality regresses.

## Target Metrics

### DORA (primary)

- **Deployment frequency**: how often production receives a deployment for a service or bounded domain.
- **Lead time for changes**: time from first commit on the default integration path to production deployment.
- **Change failure rate**: percentage of deployments causing a production incident or rollback-worthy defect.
- **Mean time to restore (MTTR)**: time to restore service after an incident tied to a deployment.

### Complementary team KPIs (secondary, pick 3-5 max)

Choose a small set that Supply teams already track or can track cheaply:

- **PR cycle time**: open → merge, split by AI-assisted vs not (when labels exist).
- **Defect escape rate**: production defects linked to PRs, split by AI-assisted vs not.
- **Reviewer rework rate**: substantive follow-up commits after first review.
- **Test effectiveness proxy**: flaky test rate, CI failure rate on main, coverage delta (already partially tracked in `kpi-tracker.csv`).
- **Flow health**: WIP age, blocked time in Jira (if reliable in your org).

## Definitions (must be explicit before measuring)

### AI-assisted work definition

Use PR labels as the canonical signal (already proposed in `update-process.md`):

- `ai-assisted` (required baseline)
- `ai-test-generated`
- `ai-review-used`
- `ai-docs-updated`

**Rule**: A PR counts as AI-assisted if `ai-assisted` is present. Additional labels refine the intervention type.

### Deployment unit definition

Pick one consistent definition per service/domain:

- **Service-level**: deployments counted per service pipeline.
- **Domain-level**: deployments counted per bounded context if multiple services ship together.

Document the chosen unit in the tracker to avoid mixing incompatible numerators/denominators.

### Incident and change failure definition

Define what qualifies as a change failure for DORA:

- Sev-1/Sev-2 only vs any customer-impacting incident.
- Rollbacks counted as failures.
- Feature flags: decide whether a flag-off counts as failure or not.

## Evaluation Design (phased)

### Phase 0: Instrumentation readiness (1-2 weeks)

**Goal**: trustworthy labels + baseline dashboards.

Deliverables:

- Label policy agreed by EM + TL + AI lead.
- Pilot repos selected (3-5) across Supply domains.
- Baseline window captured (2-4 weeks) with no major process changes.

Exit criteria:

- `ai-assisted` label present on `>=80%` of eligible PRs in pilot repos (or explicit opt-out reason captured).

### Phase 1: Observational cohort study (4-8 weeks)

**Goal**: correlate AI adoption intensity with DORA deltas without claiming causality.

Approach:

- Track weekly aggregates per pilot repo/service:
  - deployment frequency
  - lead time
  - CFR
  - MTTR
  - PR cycle time split by AI-assisted

Exit criteria:

- Stable trend lines with documented confounders (hiring, freeze, major migration).

### Phase 2: Targeted experiments (sprint-sized)

**Goal**: causal-ish learning for specific interventions.

Examples aligned to your adoption map:

- Experiment A: AI-generated tests for new modules only.
- Experiment B: AI PR description + test plan template mandatory for Supply PRs.
- Experiment C: AI-assisted incident triage runbook for one rotation.

Each experiment needs:

- **Hypothesis**: expected movement in 1-2 metrics.
- **Scope boundary**: repos/services included.
- **Randomization or alternation** (if feasible): alternating weeks or alternating teams with similar workload.
- **Guardrails**: stop if CFR rises or flaky tests spike.

### Phase 3: Scale what works (ongoing)

**Goal**: embed winning patterns into standards and reduce measurement overhead.

Deliverables:

- Updated engineering standards for PRs and incidents.
- Automated weekly KPI digest generated from existing data sources.

## Data Sources and Ownership

| Signal | Likely source | Owner |
|---|---|---|
| PR labels + merge timestamps | GitHub | TL / DevEx |
| Deploy timestamps + environments | CI/CD + deploy tooling | SRE / DevEx |
| Incidents + severity + resolution timestamps | Incident system | On-call captain |
| Jira flow metrics | Jira | EM / PM |
| Test/CI health | CI analytics | TL |

## Reporting Cadence

- **Weekly**: pilot repo dashboard snapshot + anomalies.
- **Sprint**: update `kpi-tracker.csv` + narrative in sprint board update doc.
- **Quarterly**: leadership readout with DORA trends + top 3 learnings + retired experiments.

## Risks and Mitigations

- **Label gaming**: mitigate with spot audits + sampling PR descriptions vs label.
- **Confounding by team maturity**: mitigate with multi-repo pilots + document major external changes.
- **Overfitting to speed**: pair deployment frequency with CFR and defect escape rate always.
- **Privacy and compliance**: keep prompts and examples free of sensitive customer data; use synthetic fixtures.

## Minimum viable “AI eval” artifact set

1. `kpi-tracker.csv` (already started)
2. Weekly dashboard (existing BI or simple export)
3. Experiment log (one row per experiment: hypothesis, dates, outcome, decision)

## Next concrete actions (priority order)

1. Confirm DORA definitions (deployment unit, CFR severity threshold) with SRE + EM.
2. Lock label policy and pilot repos.
3. Build a 4-week baseline capture plan (no new AI experiments during baseline if possible).
4. Start Sprint 1 row in `kpi-tracker.csv` with real PR counts and merge medians.
5. After baseline, run 1 experiment per sprint maximum.

## Repo Artifacts (implementation scaffolding)

- `dora-definitions.md`
- `pilot-scope-template.md`
- `pilot-scope-example-filled.md`
- `weekly-dora-export-template.csv`
- `weekly-dora-export-example-filled.csv`
- `weekly-dora-export-template.md`
- `sprint-kpi-rollup-example.md`
- `experiment-log.csv`
- `kpi-tracker.csv` + `scripts/update-kpi-derived-fields.mjs`
