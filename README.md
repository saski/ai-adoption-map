# AI Adoption Map for Eventbrite Supply Teams

This folder contains a practical AI adoption map inspired by Gorka's value stream map format and adapted to Eventbrite Supply team workflows.

## Goals

- Visualize where AI is already used in the software delivery lifecycle.
- Identify realistic "next best" AI opportunities per stage.
- Keep a single, living reference that can be reviewed and updated every sprint.

## Manager briefing demo (in browser)

Open this file locally for a screen-share friendly walkthrough:

- `demo/manager-briefing.html` — value stream board plus **Evals + DORA** flow (cadence, four metrics, P0–P3 phases). Each task expands for **proposed goal** and **proposed tool** (MCP, skill, workflow, label).

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

## Suggested Usage

1. Start from the map to align on current and target AI usage.
2. Use `visual-board-mermaid.md` in planning/review meetings for quick visual alignment.
3. Use the update process during sprint ceremonies.
4. Track movement of tasks from "possible" to "active" every sprint.