# DORA Definitions (Supply Pilot Contract)

This document is the measurement contract for connecting AI-assisted delivery signals to DORA outcomes.

## Pilot Scope

Fill in `pilot-scope-template.md` (copy to `pilot-scope-<pilot-name>.md` — **one file per measurement pilot**, typically team-scoped with multiple repos listed inside) and treat it as authoritative for:

- which services/repos are in-scope
- what environment counts as “production”
- what time window counts as a sprint/week for rollups

## Deployment Frequency

**Definition**: Count of successful production deployments for the in-scope service/domain during the measurement window.

**Counts as a deployment** when:

- A production release pipeline completes for the in-scope artifact, or
- A production deploy event is recorded for the in-scope service (choose one and stay consistent).

**Does not count** when:

- Deployments to staging, sandbox, or personal environments.

## Lead Time for Changes

**Definition**: Median elapsed time from first commit on the integration path to production deployment, for changes that reached production during the window.

**Notes**:

- Prefer VCS timestamps + deploy timestamps from the same system of record.
- Exclude changes that never reached production during the window.

## Change Failure Rate (CFR)

**Definition**: `failed_prod_deployments / prod_deployments * 100` over the same window and scope.

**Failed deployment** means any of the following occurred within the agreed rollback window after deploy:

- Production incident opened with severity `>=` agreed threshold (see below)
- Rollback/redeploy required to restore expected behavior
- Sev-0 customer-impacting outage attributed to the deploy

**Severity threshold (default for pilot)**:

- Count failures for incidents with severity **Sev-1 or higher** (adjust if org standard differs).

## Mean Time to Restore (MTTR)

**Definition**: Median time from incident detection to service restored for incidents attributed to a production deployment in-scope.

**Attribution rule (pilot)**:

- Incident must link to a deploy identifier (pipeline run, release tag, or service version bump).

## AI-Assisted Attribution (input signal)

AI-assisted work is attributed at the PR level using labels:

- `ai-assisted` (required for “AI-assisted cohort”)

Optional refinements:

- `ai-test-generated`
- `ai-review-used`
- `ai-docs-updated`

**Rule**: DORA metrics are not “AI metrics” by themselves. AI impact is evaluated by comparing cohorts or trends:

- AI-assisted PRs vs non-AI-assisted PRs (leading indicators)
- Overall service DORA metrics before/after controlled experiments (lagging outcomes)

## Change Control

Any change to these definitions requires:

- EM + TL + AI lead sign-off
- A note row in `kpi-tracker.csv` explaining the discontinuity
