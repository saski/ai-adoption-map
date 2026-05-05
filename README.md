# AI Adoption Map for Eventbrite Supply Teams

This folder contains a practical AI adoption map inspired by 540's value stream map format and adapted to Eventbrite teams workflows.

**GitHub**: publish as **`saski/ai-adoption-map`** on the [saski](https://github.com/saski?tab=repositories) profile (private recommended). Clone from `~/saski/*` using:

`git clone git@github.com-saski:saski/ai-adoption-map.git`

## Goals

- Visualize where AI is already used in the software delivery lifecycle.
- Identify realistic "next best" AI opportunities per stage.
- Keep a single, living reference that can be reviewed and updated every sprint.

## How teams adopt this

Follow these **steps in order** once per team or domain. You do not need every file on day one—use the **examples** as shape guides, then replace with your own data.

### 0) Before anything else (same day, ~15 minutes)

1. Skim `eventbrite-supply-ai-value-stream-map.md` so everyone shares the same **30 tasks** and **five stages**.
2. Open `demo/manager-briefing.html` for a **manager walkthrough** (board + DORA chain + expandable tasks). Same content is summarized below in [Manager briefing demo](#manager-briefing-demo-in-browser).

### 1) Lock how you will measure (Week 0, before Sprint 0)

Do these **in order**:

| Step | What to do | Artifact |
| ---- | ---------- | -------- |
| 1a | Agree pilot services/repos, what counts as production, and PR label policy. | Copy `pilot-scope-template.md` → `pilot-scope-<pilot-name>.md` — **one file per pilot** (usually one pilot per team per wave, with many repos in the table inside that file). Not one file per repo unless it is a single-repo pilot. See the note at the top of `pilot-scope-template.md`. (Use `pilot-scope-example-filled.md` **only for section layout**, not as real data.) |
| 1b | Freeze DORA meaning for the pilot (deploy unit, CFR severity, MTTR attribution). | `dora-definitions.md` as the contract; adjust only with EM + TL + AI lead sign-off as described there. |

### 2) First alignment meeting (Sprint 0, ~30 minutes)

Do these **in order**:

| Step | What to do | Artifact |
| ---- | ---------- | -------- |
| 2a | Run the meeting exactly on the clock. | `alignment-meeting-agenda.md` |
| 2b | Facilitator follows prompts so decisions do not drift. | `facilitator-script.md` |
| 2c | Capture the first agreed statuses and notes. | Start from `sprint-0-board-update.md` as a **filled example**, then maintain your truth in `eventbrite-supply-ai-value-stream-map.md` (or a team fork). |

### 3) Turn the meeting into a sprint habit

| Step | What to do | Artifact |
| ---- | ---------- | -------- |
| 3a | Each sprint, run the same review structure so deltas are comparable. | `board-update-template.md` |
| 3b | When statuses or experiments change, follow the operating model. | `update-process.md` |

### 4) Add outcomes (lightweight, still in order)

| Step | What to do | Artifact |
| ---- | ---------- | -------- |
| 4a | Each week, drop numbers into the weekly rollup file for in-scope services. | `weekly-dora-export-template.csv` — see `weekly-dora-export-template.md` for how to fill; copy column pattern from `weekly-dora-export-example-filled.csv` (fictional sample). |
| 4b | At sprint end, merge medians/rates into the sprint tracker. | `kpi-tracker.csv` — see `kpi-tracker-guide.md` and the worked math in `sprint-kpi-rollup-example.md`. |
| 4c | Optional: recompute derived columns from the tracker. | From repo root: `node scripts/update-kpi-derived-fields.mjs` |
| 4d | Log each sprint-sized AI eval with hypothesis and stop rules. | `experiment-log.csv` |
| 4e | Keep eval design aligned with leadership. | `ai-evals-dora-kpi-plan.md` (phases P0–P3). |

### Cadence after onboarding

| When | Time | What | Primary artifact |
| ---- | ---- | ---- | ---------------- |
| Weekly | ~15 min | Quick map check + weekly DORA row | `update-process.md` §2 + `weekly-dora-export-template.csv` |
| End of each sprint | ~30 min | Formal map update + rollup + 1–3 next experiments | `board-update-template.md` + `kpi-tracker.csv` + `experiment-log.csv` |
| Quarterly | ~60 min | Impact narrative, confounders, scale vs stop | `ai-evals-dora-kpi-plan.md` + `PROJECT_STATUS.md` |

### Examples cheat sheet (what to open when)

| You need… | Open this example first |
| --------- | ------------------------ |
| First baseline write-up | `sprint-0-board-update.md` |
| Pilot scope layout | `pilot-scope-example-filled.md` (structure only; `<pilot-name>` = measurement pilot, typically team-scoped) |
| Weekly CSV shape | `weekly-dora-export-example-filled.csv` |
| Sprint → tracker math | `sprint-kpi-rollup-example.md` |
| Live screen share | `demo/manager-briefing.html` |

## Manager briefing demo (in browser)

Open this file locally for a screen-share friendly walkthrough:

- `demo/manager-briefing.html` — value stream board plus **Evals + DORA** flow (cadence, four metrics, P0–P3 phases), an **in-order adoption playbook** (same steps as below), and expandable tasks for **proposed goal** and **proposed tool** (MCP, skill, workflow, label).

How to open:

- macOS: `open demo/manager-briefing.html`
- Or drag the file into a browser tab (no local server required).

## Contents

- `eventbrite-supply-ai-value-stream-map.md`: staged value stream map with task-level AI opportunities.
- `visual-board-mermaid.md`: visual board version (stage columns + color-coded status).
- `update-process.md`: operating model to keep the map accurate over time.
- `board-update-template.md`: sprint-ready template to run updates consistently.
- `sprint-0-board-update.md`: first filled baseline update ready for team review.
- `alignment-meeting-agenda.md`: 30-minute agenda for first alignment meeting.
- `facilitator-script.md`: facilitator speaking script to run the session.
- `kpi-tracker.csv`: sprint-by-sprint KPI log for adoption and quality trends.
- `kpi-tracker-guide.md`: column definitions and update workflow for KPI tracking.
- `scripts/update-kpi-derived-fields.mjs`: recalculates derived KPI fields in the CSV.
- `ai-evals-dora-kpi-plan.md`: plan to add AI evals and connect adoption to DORA and team KPIs.
- `dora-definitions.md`: locked DORA definitions for the Supply pilot.
- `pilot-scope-template.md`: template to define pilot services/repos and measurement boundaries.
- `pilot-scope-example-filled.md`: fictional filled example for copy/paste structure.
- `weekly-dora-export-template.csv`: weekly per-service DORA rollup template.
- `weekly-dora-export-template.md`: how to fill the weekly export using common query patterns.
- `weekly-dora-export-example-filled.csv`: fictional filled weekly export sample.
- `sprint-kpi-rollup-example.md`: worked example of weekly → sprint `kpi-tracker.csv` rollup math.
- `experiment-log.csv`: lightweight experiment log for sprint-sized AI evals.
- `PROJECT_STATUS.md`: current status of this initiative.

### Ongoing habits

- Use `visual-board-mermaid.md` in planning or review when you want a **single-slide** view of the five stages.
- Move tasks **Possible → Active** only when `update-process.md` §4 criteria are met (two sprints of use, clear benefit, no open policy blockers).
