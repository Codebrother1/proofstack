# ProofStack v0

ProofStack is an evidence and verification protocol for AI-agent work.

> Task → acceptance criteria → execution → independent verification → evidence → result

Before the meetup, this directory holds protocol requirements and examples. It does not need to become a large application. During open build, the manual protocol may become a small CLI or report generator if the benchmark shows that automation would help.

## Required record

Every ProofStack run must preserve:

1. task request
2. executor
3. frozen acceptance criteria
4. required evidence
5. approval gates
6. exact execution instruction
7. executor's completion claim
8. criterion-by-criterion verification
9. human/objective ground truth
10. result and failure mode

