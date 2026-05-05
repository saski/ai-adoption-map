# Facilitator Script - AI Adoption Baseline Alignment (30 min)

Use this script verbatim or adapt as needed.

## Opening (0:00-0:03)

"Today we are aligning on our Sprint 0 AI adoption baseline for Eventbrite Supply teams.  
The goal is simple: agree on baseline statuses and commit to 1-3 small, measurable experiments for next sprint.  
This is a calibration session, not a team performance evaluation."

## Transition to Visual Map (0:03-0:08)

"Let’s review the visual board first.  
We are using a 5-stage value stream: Define, Plan, Implement, Integrate, Operate.  
Our current baseline split is 18 Active, 10 Possible, 2 N/A."

"If anything looks clearly wrong, flag it now and we will decide based on real usage evidence."

## Status Validation Prompt (0:08-0:16)

"We’ll focus on the highest-value disputed items only.  
For each disputed task, please answer in this format:  
1) observed usage in last 2 sprints,  
2) measurable value or pain,  
3) recommended status."

"First discussion target: task 26, internal support handling.  
Second target: tasks 06 and 22 as N/A.  
If no strong evidence is presented, we keep baseline as-is."

## Experiment Selection Prompt (0:16-0:24)

"Now we select experiments for next sprint.  
Each experiment must be small, owner-assigned, and measurable in one sprint."

"For each candidate experiment, confirm:
- owner,
- scope boundary,
- success metric,
- stop condition if risk appears."

"We should leave this meeting with maximum 3 experiments."

## Guardrails Prompt (0:24-0:28)

"Before we close, confirm guardrails:
- no sensitive production data in prompts,
- human gates remain for architecture and release decisions,
- AI-generated changes still pass standard CI and review requirements."

"Also confirm reporting inputs:
- consistent PR/Jira labels in pilot repos."

## Closing and Commitments (0:28-0:30)

"Let’s confirm owners for post-meeting updates:
- map file updates,
- visual board updates,
- sprint update log."

"Next checkpoint is next sprint review.  
If we execute well, we should see at least one `Possible -> Active` candidate next cycle."

## Quick Parking Lot Questions

Use this only if discussion goes off-track:

- "Can this be validated with data before next session?"
- "Is this a policy question or an execution question?"
- "Does this change sprint scope or only measurement?"
