# Pilot Scope Template (Eventbrite Supply)

Copy this file to `pilot-scope-<pilot-name>.md` and fill it in before collecting DORA exports.

See `pilot-scope-example-filled.md` for a fictional completed example.

## Pilot Metadata

- Pilot name: `<example: Supply-AI-DORA-Pilot-2026-Q2>`
- Owner (AI lead): `<name>`
- Engineering sponsor (EM): `<name>`
- SRE/DevEx sponsor: `<name>`
- Start date: `<YYYY-MM-DD>`
- End date: `<YYYY-MM-DD>`

## In-Scope Services or Domains

List the smallest consistent unit you will measure DORA against.

| Service or domain | Repo(s) | Production deploy identifier | Notes |
| --- | --- | --- | --- |
| `<service A>` | `<org/repo>` | `<pipeline name / release tag pattern>` | `<notes>` |
| `<service B>` | `<org/repo>` | `<pipeline name / release tag pattern>` | `<notes>` |

## Out of Scope (explicit)

- `<service X>`: `<reason>`
- `<repo Y>`: `<reason>`

## PR Label Policy (AI-assisted cohort)

- Required label for AI-assisted PRs: `ai-assisted`
- Optional labels: `ai-test-generated`, `ai-review-used`, `ai-docs-updated`
- Opt-out policy: `<when a PR may be AI-assisted but must not be labeled>`

## Incident Severity Threshold (CFR)

Pick one and align with `dora-definitions.md`:

- [ ] Sev-1+ counts as failure
- [ ] Sev-2+ counts as failure
- [ ] Custom: `<definition>`

## Weekly Export Process

1. Export deploy events for in-scope services for the week.
2. Export incidents attributed to deploys for the week.
3. Fill `weekly-dora-export-template.csv` one row per service per week.
4. Follow `weekly-dora-export-template.md` for counting rules and query patterns.
5. Roll up into sprint-level `kpi-tracker.csv` at sprint end.
