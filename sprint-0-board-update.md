# AI Adoption Board Update - Sprint 0 (Baseline)

- Date: `2026-05-05`
- Facilitator: `AI Lead - Supply Engineering`
- Teams represented: `Inventory`, `Catalog`, `Pricing`, `Order Management`, `Developer Experience`

## 1) Status Changes

- `AI Possible -> AI Active`
  - None in Sprint 0 (baseline only).
- `AI Active -> AI Possible`
  - None in Sprint 0 (baseline only).
- `No Change`
  - `01-30` (all tasks remain at baseline status).

## 2) KPI Snapshot

- Total tasks: `30`
- AI Active: `18` (`60%`)
- AI Possible: `10` (`33%`)
- N/A: `2` (`7%`)
- Time-to-merge trend (AI PRs): `not measured` (no median merge sample yet)
- Defect escape trend (AI PRs): `not measured` (no AI-assisted PR cohort yet)

## 3) Experiments for Next Sprint (1-3)

1. Expand AI-assisted acceptance criteria generation for 2 backlog items per team  
   - owner: `EM + PM per team`  
   - success metric: `>=80% of stories include edge-case criteria before implementation`

2. Standardize PR generation with AI template in 3 pilot repos  
   - owner: `Tech Leads`  
   - success metric: `10% reduction in review turnaround time`

3. Pilot AI-assisted incident triage runbook in one on-call rotation  
   - owner: `On-call captain`  
   - success metric: `15% faster mean time to identify likely root cause`

## 4) Risks and Guardrails

- Security/policy concerns:
  - No production secrets in prompts, logs, or examples.
  - Keep mandatory human approval for architecture and release decisions.
- Quality concerns:
  - AI-generated tests may miss integration edge cases.
  - AI suggestions may increase verbosity without increasing quality.
- Tooling constraints:
  - Inconsistent label usage across repos may reduce reporting accuracy.
  - Different team workflows may require slightly different PR templates.

## 5) Actions

- [x] Update `visual-board-mermaid.md`
- [x] Update `ai-adoption-value-stream-map.md`
- [x] Update `PROJECT_STATUS.md`

## Notes for the First Alignment Session

- Treat this sprint as a calibration sprint, not a performance sprint.
- Confirm whether task `26` (internal support handling) should move to `AI Active` for at least one pilot team.
- Validate the two `N/A` tasks (`06`, `22`) with leadership to avoid over-automation pressure.
