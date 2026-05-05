# AI Adoption Map (Eventbrite Supply) — Project Status

**Last Updated**: 2026-05-05
**Overall Status**: 🟢 **97% Complete** - Manager demo now includes Evals + DORA impact diagram

**Repository**: [github.com/saski/ai-adoption-map](https://github.com/saski/ai-adoption-map) (create private repo on the `saski` account if it does not exist yet; local folder is `~/saski/ai-adoption-map`).

---

## Executive Summary


| Component                        | Status         | Progress | Blocking |
| -------------------------------- | -------------- | -------- | -------- |
| Value stream map draft           | ✅ Complete     | 100%     | -        |
| Update process draft             | ✅ Complete     | 100%     | -        |
| Visual board artifact            | ✅ Complete     | 100%     | -        |
| Sprint update template           | ✅ Complete     | 100%     | -        |
| Sprint 0 baseline update         | ✅ Complete     | 100%     | -        |
| Alignment meeting agenda         | ✅ Complete     | 100%     | -        |
| Facilitator script               | ✅ Complete     | 100%     | -        |
| KPI tracker CSV                  | ✅ Complete     | 100%     | -        |
| KPI tracking guide               | ✅ Complete     | 100%     | -        |
| KPI automation script            | ✅ Complete     | 100%     | -        |
| AI evals + DORA KPI plan         | ✅ Complete     | 100%     | -        |
| DORA definitions contract        | ✅ Complete     | 100%     | -        |
| Pilot scope template             | ✅ Complete     | 100%     | -        |
| Pilot scope example (fictional)  | ✅ Complete     | 100%     | -        |
| Weekly DORA export template      | ✅ Complete     | 100%     | -        |
| Weekly DORA export example       | ✅ Complete     | 100%     | -        |
| Weekly DORA export guide         | ✅ Complete     | 100%     | -        |
| Sprint KPI rollup example        | ✅ Complete     | 100%     | -        |
| Manager briefing demo (map + DORA) | ✅ Complete     | 100%     | -        |
| Experiment log                   | ✅ Complete     | 100%     | -        |
| Stakeholder alignment            | 🟡 In Progress | 20%      | No       |
| Baseline metrics instrumentation | 🟡 In Progress | 30%      | No       |


**Current Readiness**: 🟡 Ready for pilot kickoff - measurement contracts drafted, awaiting signed pilot scope.

---

## ✅ Completed Components

### Initial Mapping and Process (2026-05-05)

- ✅ Created a dedicated folder for the initiative.
- ✅ Drafted a Supply-specific AI adoption value stream map with 30 tasks.
- ✅ Added status model (`AI Active`, `AI Possible`, `N/A`) with baseline counts.
- ✅ Defined a weekly/sprint/quarterly update operating model.

### Visual and Operational Artifacts (2026-05-05)

- ✅ Added Mermaid visual board aligned with the 5-stage value stream.
- ✅ Added reusable sprint update template for consistent governance updates.
- ✅ Updated README with usage guidance for map + visual + process.

### Baseline Review Artifact (2026-05-05)

- ✅ Created `sprint-0-board-update.md` with initial KPIs, experiments, and guardrails.
- ✅ Prepared a ready-to-run alignment artifact for first team review.

### Meeting Operations Pack (2026-05-05)

- ✅ Added `alignment-meeting-agenda.md` with a strict 30-minute flow.
- ✅ Added `facilitator-script.md` with prompts and decision framing.

### KPI Tracking Layer (2026-05-05)

- ✅ Added `kpi-tracker.csv` with baseline Sprint 0 row.
- ✅ Added `kpi-tracker-guide.md` with formulas, definitions, and update workflow.
- ✅ Wired KPI artifacts into project README.

### KPI Automation (2026-05-05)

- ✅ Added `scripts/update-kpi-derived-fields.mjs` to auto-calculate derived fields.
- ✅ Verified script execution against baseline tracker without errors.
- ✅ Fixed empty CSV cells to parse as missing values (not numeric zero).
- ✅ Added row normalization to pad short CSV rows to the header width.
- ✅ Avoided inventing merge-time trends when no prior median exists.

### AI Evals + DORA Alignment Plan (2026-05-05)

- ✅ Added `ai-evals-dora-kpi-plan.md` describing phased eval design and metric definitions.
- ✅ Linked plan into README for discoverability.

### DORA Measurement Contract + Weekly Rollups (2026-05-05)

- ✅ Added `dora-definitions.md` with explicit DORA definitions and CFR severity guidance.
- ✅ Added `pilot-scope-template.md` to standardize pilot selection and boundaries.
- ✅ Added `pilot-scope-example-filled.md` as a fictional reference completion.
- ✅ Added `weekly-dora-export-template.csv` for per-service weekly exports.
- ✅ Added `weekly-dora-export-example-filled.csv` with fictional one-week, three-service sample data.
- ✅ Added `weekly-dora-export-template.md` with manual query patterns and weekly checklist.
- ✅ Added `experiment-log.csv` for sprint-sized AI eval tracking.
- ✅ Extended `kpi-tracker.csv` with DORA rollup fields and updated the KPI script accordingly.

### Sprint Rollup Example (2026-05-05)

- ✅ Added `sprint-kpi-rollup-example.md` documenting weekly → sprint aggregation.
- ✅ Added fictional `S1-example` row to `kpi-tracker.csv` aligned to `weekly-dora-export-example-filled.csv`.

### Manager Enablement (2026-05-05)

- ✅ Added `demo/manager-briefing.html` for in-browser walkthroughs with engineering managers.
- ✅ Linked demo entrypoint from `README.md`.
- ✅ Extended the same HTML with an **Evals + DORA** visual: measurement cadence (lock → weekly → sprint → eval → narrative), four DORA tiles, P0–P3 phase ladder, and cohort attribution note.
- ✅ Each value-stream task is **expandable** (`<details>`): shows **proposed goal** and **proposed tool** (MCP, Cursor skill, workflow, or label), with search covering those fields.

### Repository naming (2026-05-05)

- ✅ Local folder renamed to `ai-adoption-map` (was `ai-adoption-map-eventbrite-supply`); target GitHub repo name **`saski/ai-adoption-map`** for [saski repositories](https://github.com/saski?tab=repositories).
- ✅ KPI script default CSV path runs from repo root (`kpi-tracker.csv`); guides updated for `node scripts/...`.

---

## 🚧 In Progress

- None yet.

---

## 📋 Next Steps

1. Run first alignment meeting using `alignment-meeting-agenda.md` + `facilitator-script.md`.
2. Validate and adjust disputed task statuses with Supply leads.
3. Enforce PR/Jira labeling for AI-assisted workflow tracking.
4. Add Sprint 1 row and run KPI script after sprint close.
5. Execute Phase 0 in `ai-evals-dora-kpi-plan.md` (definitions + pilot repos + baseline window).
6. Fill `pilot-scope-<name>.md` from `pilot-scope-template.md` (use `pilot-scope-example-filled.md` as a structural reference) and start weekly `weekly-dora-export-template.csv` exports.
7. Use `sprint-kpi-rollup-example.md` as the reference for rolling weekly rows into `kpi-tracker.csv`.

---

## 🐛 Known Issues

- Current baseline is proposed and not yet evidence-verified by all teams.

---

## 📝 Notes

- Map structure is inspired by Gorka's value stream style and adapted to Eventbrite Supply workflow.
- Future updates should keep task list stable and only change statuses/notes unless process changes materially.

