# The Agent Trust Gap — Dallas Prep

This workspace supports one project:

> Measure the gap between an AI agent saying work is complete and observable evidence showing that the predetermined requirements were satisfied.

## Deliverables

- 20 minimum / 24 target evidence-backed agent runs (30 stretch)
- 90-second, 3-minute, and 5-minute versions of **The Agent Trust Gap**
- ProofStack v0 as a usable verification protocol
- one controlled open-build task plus an offline fallback
- a public, sanitized dataset and verification checklist
- one QR landing page linking to the complete handoff

## Source-of-truth map

| Information | Source of truth |
|---|---|
| Run-level observations and classifications | `02-data/agent-trust-gap-log.xlsx` |
| Evidence | `03-evidence/EXP-###/` |
| Predetermined task definitions | `01-experiments/task-specs/` |
| Decisions and current position | `DECISIONS.md` and `STATUS.md` |
| Deadlines and next actions | Linear project |
| Public artifacts and history | `https://github.com/Codebrother1/proofstack` |

## Non-negotiable method

1. Freeze acceptance criteria before execution.
2. Preserve the exact instruction.
3. Never treat an agent's completion claim as proof.
4. Determine ground truth from human inspection and/or objective evidence.
5. Preserve failures and retries.
6. Sanitize credentials, personal data, and client information before publishing.
7. Describe results as observations from this benchmark, not universal product statistics.

## Start here

Open `DAY-1.md`. Complete one action at a time. After each run, update the workbook and `STATUS.md` before starting another.
