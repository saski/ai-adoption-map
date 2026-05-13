# Pilot Scope Example (Fictional) - Product Engineering

This is a filled example for structure only. Replace all placeholders with real services, repos, and identifiers before use.

## Pilot Metadata

- Pilot name: `Supply-AI-DORA-Pilot-2026-Q2-Example`
- Owner (AI lead): `Alex Example`
- Engineering sponsor (EM): `Sam Example`
- SRE/DevEx sponsor: `Riley Example`
- Start date: `2026-05-12`
- End date: `2026-06-20`

## In-Scope Services or Domains

| Service or domain | Repo(s) | Production deploy identifier | Notes |
| --- | --- | --- | --- |
| `inventory-api` | `example-org/inventory-api` | `deploy-inventory-api-prod` pipeline success | Count only prod promotion step, not canary-only unless promoted |
| `catalog-read-service` | `example-org/catalog-read-service` | Git tag `catalog-read@*` applied to prod release | Hotfix path must use same tagging scheme |
| `pricing-engine` | `example-org/pricing-engine` | `deploy-pricing-engine-prod` pipeline success | Exclude scheduled config-only deploys if not code changes |

## Out of Scope (explicit)

- `legacy-batch-jobs`: not touched by pilot teams this quarter
- `experimental-search-ranking`: unstable deploy cadence, would distort DORA

## PR Label Policy (AI-assisted cohort)

- Required label for AI-assisted PRs: `ai-assisted`
- Optional labels: `ai-test-generated`, `ai-review-used`, `ai-docs-updated`
- Opt-out policy: if AI drafting occurred but the PR is not materially AI-assisted, do not apply `ai-assisted`

## Incident Severity Threshold (CFR)

Pick one and align with `dora-definitions.md`:

- [x] Sev-1+ counts as failure
- [ ] Sev-2+ counts as failure
- [ ] Custom: `<definition>`

## Weekly Export Process

1. Export deploy events for in-scope services for the week.
2. Export incidents attributed to deploys for the week.
3. Fill `weekly-dora-export-template.csv` one row per service per week.
4. Follow `weekly-dora-export-template.md` for counting rules and query patterns.
5. Roll up into sprint-level `kpi-tracker.csv` at sprint end.
