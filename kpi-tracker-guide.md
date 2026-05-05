# KPI Tracker Guide

This file explains how to use `kpi-tracker.csv` each sprint.

## Metrics Covered

The CSV tracks the exact metrics defined in `update-process.md`:

1. Adoption ratio (`Active / Total tasks`)
2. Time-to-merge trend for AI-assisted PRs
3. Defect escape rate for AI-assisted changes
4. Test coverage delta on AI-assisted PRs
5. Reviewer rework rate after AI-generated code

It also supports rolling up DORA outcomes for a pilot scope:

- Change failure rate (`cfr_pct`) when deploy and failure counts exist
- Deployment frequency per week (`deployment_frequency_per_week`) when deploy counts and sprint length exist

## Column Reference

- `sprint_id`: Sprint label (example: `S1`, `S2`, `2026-W20`)
- `date`: Snapshot date (`YYYY-MM-DD`)
- `pilot_scope_id`: Identifier for the active pilot (see `pilot-scope-template.md`)
- `pilot_service_or_domain`: Primary service/domain being measured for DORA rollups
- `sprint_length_days`: Length of the sprint window (commonly `14`)
- `total_tasks`: Usually `30` unless map changes
- `ai_active_tasks`: Count of tasks marked `AI Active`
- `ai_possible_tasks`: Count of tasks marked `AI Possible`
- `na_tasks`: Count of tasks marked `N/A`
- `adoption_ratio_active_pct`: `(ai_active_tasks / total_tasks) * 100`
- `ai_pr_count`: Number of PRs labeled as AI-assisted in this sprint
- `median_time_to_merge_hours_ai_prs`: Median merge time in hours for AI-assisted PRs
- `time_to_merge_trend_vs_prev`: `up`, `down`, `flat`, or blank when merge data is missing
- `ai_prs_with_prod_defects`: Count of AI-assisted PRs linked to prod defects
- `defect_escape_rate_pct`: `(ai_prs_with_prod_defects / ai_pr_count) * 100`
- `test_coverage_delta_avg_pct_points`: Average test coverage delta vs pre-PR baseline
- `reviewer_rework_rate_pct`: `(ai PRs requiring substantial rework / ai_pr_count) * 100`
- `prod_deployments_count`: Successful production deployments in-scope during the sprint
- `failed_prod_deployments_count`: Failed production deployments in-scope during the sprint (per `dora-definitions.md`)
- `cfr_pct`: `(failed_prod_deployments_count / prod_deployments_count) * 100`
- `deployment_frequency_per_week`: `(prod_deployments_count / sprint_length_days) * 7`
- `mttr_median_hours`: Median restore time for incidents attributed to prod deploys in-scope
- `lead_time_median_hours_all_prs`: Median lead time for changes reaching production (cohort definition is org-specific)
- `notes`: Context for anomalies or data gaps

## Update Workflow (Per Sprint)

1. Pull data from PR labels and incident tickets.
2. Fill weekly rows in `weekly-dora-export-template.csv` (one row per service per week).
   - Follow `weekly-dora-export-template.md` for counting rules and query patterns.
3. Roll weekly rows up into sprint-level inputs for `kpi-tracker.csv`.
4. Update one new row in `kpi-tracker.csv`.
5. Run:
   - From the repo root: `node scripts/update-kpi-derived-fields.mjs`
6. Recompute derived fields automatically:
   - `adoption_ratio_active_pct`
   - `defect_escape_rate_pct`
   - `time_to_merge_trend_vs_prev`
   - `cfr_pct`
   - `deployment_frequency_per_week`
7. Compare results with previous sprint and validate anomalies.
8. Reflect key changes in `sprint-<id>-board-update.md` and `PROJECT_STATUS.md`.

## Data Hygiene Rules

- Keep one row per sprint only.
- Never overwrite previous sprint rows.
- If a metric is unavailable, leave blank and explain in `notes`.
- Use consistent PR labels (`ai-assisted`, `ai-test-generated`, `ai-review-used`, `ai-docs-updated`).
- Keep every data row aligned to the header column count. The KPI script pads short rows, but misaligned manual rows can still confuse humans.
- See `sprint-kpi-rollup-example.md` for a worked rollup example.
