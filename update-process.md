# Update Process - AI Adoption Map

This process keeps the map current and useful for product engineering teams.

## 1) Ownership

- **Primary owner**: AI Lead for Supply engineering.
- **Contributors**: Engineering managers, tech leads, product managers, QA leads.
- **Approver**: Supply leadership triad (EM + PM + Design/TPM delegate).

## 2) Cadence

- **Weekly (15 min)**: quick map check in team sync.
- **Per sprint (30 min)**: formal status update during retro or sprint review.
- **Quarterly (60 min)**: deeper review of adoption impact and new opportunities.

## 3) Update Trigger Events

Update the map immediately when any of these happens:

- A new AI workflow is adopted in daily delivery.
- A previous AI workflow is removed due to low value or risk.
- A delivery incident reveals a missing quality gate.
- Tooling changes (new MCP, model, policy, CI integration).

## 4) Definition of Status Changes

- `AI Possible -> AI Active` requires:
  - At least 2 sprints of real usage.
  - Clear positive impact on speed, quality, or confidence.
  - No unresolved policy or security blocker.
- `AI Active -> AI Possible` when:
  - Reliability drops.
  - Team confidence is low.
  - Process cost is higher than benefit.

## 5) Metrics to Track

- Adoption ratio: `Active / Total tasks`.
- Time-to-merge trend for PRs using AI assistance.
- Defect escape rate for AI-assisted changes.
- Test coverage delta on AI-assisted PRs.
- Reviewer rework rate after AI-generated code.

## 6) Operating Workflow (Per Sprint)

1. Export candidate changes from Jira, PR labels, and incident notes.
2. Review each map task in 30 minutes with team leads.
3. Update statuses and notes in `ai-adoption-value-stream-map.md`.
4. Capture 1-3 experiments for next sprint from "AI Possible".
5. Record outcomes in `PROJECT_STATUS.md`.

## 7) Governance Guardrails

- Human review is mandatory for architecture, security, and production release decisions.
- AI-generated code must pass standard CI and test requirements.
- Team must maintain prompt and rule hygiene to avoid stale instructions.

## 8) Suggested PR Labeling

Use labels to automate reporting:

- `ai-assisted`
- `ai-test-generated`
- `ai-review-used`
- `ai-docs-updated`

These labels make status updates faster and reduce subjective scoring.
