# Weekly DORA Export Guide (Manual, Low-Tooling)

This guide helps you fill `weekly-dora-export-template.csv` once per week per in-scope service/domain.

## Preconditions

1. `pilot-scope-<pilot>.md` is filled from `pilot-scope-template.md`.
2. `dora-definitions.md` is agreed (especially CFR severity threshold and deploy counting rules).
3. Use `weekly-dora-export-example-filled.csv` as a formatting reference.
4. Use `sprint-kpi-rollup-example.md` when converting weekly rows into a sprint `kpi-tracker.csv` row.

## Output Shape

Create one CSV row per service/domain per week:

- `week_start_date`, `week_end_date`
- `pilot_scope_id`
- `service_or_domain`
- `prod_deployments_count`
- `failed_prod_deployments_count`
- optional medians: `mttr_median_hours`, `lead_time_median_hours`

## A) Production Deployments (`prod_deployments_count`)

### Preferred signal

Use your canonical production deploy audit trail:

- CI/CD pipeline “deploy to prod” success events, or
- release tags / service version bumps tied to prod rollout

### What to count

Count **successful prod deploy completions** for the in-scope service during `[week_start, week_end]` inclusive, using the pilot’s deploy identifier rules.

### What not to count

- staging, sandbox, canary-only if your contract says canary does not count until promoted
- config-only changes if your contract excludes them (decide once and keep consistent)

## B) Failed Production Deployments (`failed_prod_deployments_count`)

Use the CFR definition in `dora-definitions.md`.

Practical counting approach:

1. List incidents in the week window that are **attributed to a prod deploy** for the in-scope service.
2. Filter by agreed severity threshold (example: Sev-1+).
3. Deduplicate multiple incidents from the same failed deploy if your incident tool creates duplicates.

Also count **rollback/redeploy events** required to restore expected behavior if that is part of your CFR contract.

## C) CFR (`cfr_pct`)

Leave `cfr_pct` blank in the weekly CSV. It is derived when you roll up to sprint totals or computed in `kpi-tracker.csv` via the KPI script.

If you must store it weekly, compute:

`failed_prod_deployments_count / prod_deployments_count * 100`

Only when `prod_deployments_count > 0`.

## D) MTTR Median (`mttr_median_hours`)

For incidents attributed to prod deploys in-scope:

- take each incident’s `resolved_at - detected_at` in hours
- compute the median for the week

If you cannot attribute incidents reliably yet, leave blank and note the gap in `notes`.

## E) Lead Time Median (`lead_time_median_hours`)

This is the hardest metric to do manually. Use a pragmatic proxy until automated:

### Proxy A (recommended early)

Median time from **PR merge to prod deploy** for PRs that deployed in the week.

### Proxy B (stricter, later)

Median time from **first commit timestamp on the PR branch** to prod deploy.

Pick one proxy in the pilot scope doc and do not switch mid-baseline without marking a discontinuity.

## GitHub Queries (Patterns)

GitHub UI does not give perfect DORA answers, but it helps you enumerate PR cohorts.

### AI-assisted PRs merged in the week

Use label filters:

- `is:pr is:merged merged:YYYY-MM-DD..YYYY-MM-DD label:ai-assisted`

Repeat for each pilot repo or use org-wide search if permitted.

### PRs merged to mainline integration branch

If your org merges to a shared integration branch before prod deploy, align searches to that branch:

- `base:<integration-branch> is:pr is:merged merged:...`

## Incident / Deploy Tooling Queries (Patterns)

Use your org’s incident index with filters like:

- time window = week
- service = pilot service
- cause = deployment-related (if tagged)
- severity >= threshold

Export CSV if available; otherwise copy counts into the weekly template.

## Weekly Rollup Checklist (10 minutes)

1. Confirm week window and pilot scope.
2. Record `prod_deployments_count`.
3. Record `failed_prod_deployments_count` using CFR contract.
4. If possible, compute `mttr_median_hours` for attributed incidents.
5. If possible, compute `lead_time_median_hours` using the agreed proxy.
6. Add `notes` for anything ambiguous (rollbacks, hotfixes, incident duplicates).

## Rolling Weekly Rows into `kpi-tracker.csv` (Sprint)

At sprint end:

1. Sum `prod_deployments_count` across weeks in the sprint for the pilot service.
2. Sum `failed_prod_deployments_count` similarly (dedupe failures across weeks if needed).
3. Recompute medians across the sprint if you keep weekly medians (or recompute from raw incidents/PRs).
4. Paste those aggregates into the sprint row fields:
   - `prod_deployments_count`
   - `failed_prod_deployments_count`
   - `sprint_length_days`
5. Run:

`node ai-adoption-map-eventbrite-supply/scripts/update-kpi-derived-fields.mjs`
