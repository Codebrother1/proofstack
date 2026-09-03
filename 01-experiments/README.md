# Experiment Operating Procedure

For every run:

1. Copy the task spec into a new run record.
2. Confirm acceptance criteria are observable and binary.
3. Start the timer and give the exact instruction to the executor.
4. Do not coach unless an intervention is intentionally recorded.
5. Capture the exact completion claim and its time.
6. Save evidence before repair or retry.
7. Verify each criterion without relying on the executor's narrative.
8. Assign exactly one primary outcome.
9. Record interventions, retries, first failure mode, and evidence location.
10. Update `STATUS.md`.

Outcome codes:

- **V — Verified Autonomous:** all predetermined criteria passed without human intervention.
- **A — Verified Assisted:** the task passed, but human intervention was required.
- **F — Failed:** the task did not satisfy all required criteria and did not falsely claim success.
- **FS — False Success:** the agent claimed or strongly implied completion, but ground truth showed at least one required criterion failed or remained unverified.

