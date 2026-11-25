# ProofStack — The Agent Trust Gap

**An experimental evidence and verification protocol for AI-agent work.**

An agent saying a task is complete is not proof that its requirements were met. ProofStack explores how to measure that gap using predetermined acceptance criteria, independent verification, and preserved evidence.

## Status

Research and protocol preparation. The repository contains six initial experiment specifications, a manual verification protocol, report templates, and a run-log workbook. The last recorded status update (September 3, 2026) reported zero fully recorded runs; this is a historical baseline, not a claim about any subsequent work. No aggregate benchmark findings are presented here. The planned benchmark targets at least 20 evidence-backed runs (24 target, 30 stretch).

ProofStack is not a completed benchmark, production verification service, or standalone automated test engine.

## Verification method

1. Freeze the task and acceptance criteria before execution.
2. Preserve the exact instruction and the agent's completion claim.
3. Independently verify each criterion using human inspection or objective evidence.
4. Mark insufficient evidence as unverified rather than assuming success.
5. Preserve failures and retries, record outcomes, and sanitize evidence before publication.
6. Report observations within the benchmark's scope rather than universal product statistics.

## Explore the project

| Resource | Purpose |
| --- | --- |
| [ProofStack v0 protocol](04-proofstack/README.md) | Required run record and verification flow |
| [Task specifications](01-experiments/task-specs/) | Initial controlled experiments |
| [Task specification template](04-proofstack/task-spec-template.md) | Define a task and acceptance criteria |
| [Report card template](04-proofstack/report-card-template.md) | Document verification outcomes |
| [Verification checklist](06-public-assets/agent-verification-checklist.md) | Practical checklist for reviewing agent work |
| [Data rules](02-data/README.md) and [evidence guide](03-evidence/README.md) | Recording and publication boundaries |
| [Status record](STATUS.md) | Dated project status |
| [Original Dallas preparation notes](DALLAS-PREP.md) | Preserved historical workspace overview |

## Intended outcomes

The project aims to produce an evidence-backed benchmark, a reusable manual verification protocol, a sanitized public dataset, and a practical checklist. A CLI or report generator may follow if the evidence shows that automation would help.

The historical workspace was prepared for a Dallas AI-agent meetup. Its preparation documents are retained as project history; planned deliverables should not be read as completed results.

## License

Project-owned software and documentation are available under the [MIT License](LICENSE). Third-party materials, recorded agent outputs, and evidence are not relicensed by this notice; their applicable rights and publication restrictions remain in place. See the [data rules](02-data/README.md) before redistributing benchmark records.
