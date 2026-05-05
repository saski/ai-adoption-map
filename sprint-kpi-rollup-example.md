# Sprint KPI Rollup Example (Weekly → `kpi-tracker.csv`)

This example shows how `S1-example` in `kpi-tracker.csv` was derived from `weekly-dora-export-example-filled.csv`.

## Weekly Inputs (fictional week)

Week window: `2026-05-12` → `2026-05-18`

| service_or_domain | prod_deployments_count | failed_prod_deployments_count |
| --- | ---: | ---: |
| inventory-api | 6 | 1 |
| catalog-read-service | 4 | 0 |
| pricing-engine | 5 | 1 |

## Sprint Rollup Math

### Deployments

- `prod_deployments_count` = `6 + 4 + 5` = `15`
- `failed_prod_deployments_count` = `1 + 0 + 1` = `2`

### Change failure rate

Using the derived field in `kpi-tracker.csv`:

- `cfr_pct` = `(2 / 15) * 100` = `13.3` (rounded to 1 decimal)

### Deployment frequency per week

With `sprint_length_days = 7`:

- `deployment_frequency_per_week` = `(15 / 7) * 7` = `15.0` deploys/week

### MTTR and lead time (illustrative)

Weekly export includes per-service medians. The sprint row uses illustrative combined medians for documentation purposes:

- `mttr_median_hours` = `1.8`
- `lead_time_median_hours_all_prs` = `17.7`

In a real pilot, recompute these from raw incident timestamps and PR/deploy timestamps rather than hand-waving.

## AI-assisted PR cohort (illustrative)

The sprint row includes fictional AI-assisted PR throughput fields:

- `ai_pr_count` = `22`
- `median_time_to_merge_hours_ai_prs` = `9.5`
- `ai_prs_with_prod_defects` = `1`

These are not derived from the weekly DORA export and must come from PR label queries.

## Merge time trend demo (optional)

The `S0` baseline row includes a fictional `median_time_to_merge_hours_ai_prs` value so `S1-example` can demonstrate `time_to_merge_trend_vs_prev` without implying real measurement yet.
