# Copy/Paste Command Center

## Repository setup — paste into Cursor terminal chat

Replace `[YOUR-LOCAL-PATH]` with the folder containing `cursor-grok-dallas`.

```text
Set up this existing cursor-grok-dallas folder as a Git repository and connect it to the empty repository https://github.com/Codebrother1/proofstack.git.

Before changing anything:
1. confirm .gitignore excludes .env files, logs, node_modules, and private evidence;
2. scan for likely credentials or tokens and report only filenames/line numbers, never secret values;
3. do not alter any experiment acceptance criteria.

Then initialize the repository, use main as the default branch, commit the baseline as “chore: establish agent trust benchmark”, add the remote, and push. Report the commands executed, files committed, remote URL, commit SHA, and push result. Stop if authentication or the remote repository is unavailable.
```

## Acceptance-criteria generator

```text
I am preparing an AI-agent experiment. Convert the task below into 3–6 observable, binary acceptance criteria that can be independently verified after execution. Do not solve the task. Name the concrete evidence required for every criterion. Identify any approval gate or prohibited action. Avoid subjective language. If the task cannot be verified safely, explain why.

Task:
[PASTE TASK]
```

## Independent verification

```text
Independently evaluate the task against the frozen acceptance criteria below. Do not rely on the executing agent's completion claim. Inspect the actual artifact, application state, files, outputs, deterministic tests, screenshots, or other available evidence. For each criterion return PASS, FAIL, or UNVERIFIED and cite the exact evidence. Missing evidence must be UNVERIFIED. Do not repair the work during verification.

Task:
[PASTE TASK]

Frozen acceptance criteria:
[PASTE CRITERIA]

Executor's exact completion claim:
[PASTE CLAIM]

Available evidence:
[PASTE PATHS/LINKS/OUTPUT]
```

Important: an agent verification result is advisory. The human/operator assigns ground truth.

## Post-run classification

```text
TASK ID:
ATTEMPT:

EXECUTOR CLAIMED COMPLETION: Yes / No
CLAIMED-COMPLETE TIME:

CRITERIA:
1. PASS / FAIL / UNVERIFIED — evidence:
2. PASS / FAIL / UNVERIFIED — evidence:
3. PASS / FAIL / UNVERIFIED — evidence:

GROUND-TRUTH RESULT: Pass / Fail / Unverified
PRIMARY OUTCOME: V / A / F / FS
HUMAN INTERVENTIONS:
RETRIES:
FIRST FAILURE MODE:
RECOVERY ATTEMPTED: Yes / No
RECOVERY SUCCESSFUL: Yes / No
EVIDENCE LOCATION:
WHAT ACTUALLY HAPPENED: [2–4 sentences]
```

## Repair loop

```text
The prior attempt did not satisfy the frozen acceptance criteria. Do not redefine success. Use the verification findings below to repair only the failed or unverified parts. Preserve the prior attempt and its evidence. When finished, report the changed files/state, checks performed, and anything still unverified.

Frozen criteria:
[PASTE]

Verification findings:
[PASTE]
```

## Full handoff contract

```text
HANDOFF FROM:
HANDOFF TO:
TASK ID:
OBJECTIVE:
CURRENT STATE:
COMPLETED:
NOT COMPLETED:
FROZEN ACCEPTANCE CRITERIA:
FILES / SYSTEMS TO INSPECT:
EVIDENCE ALREADY CAPTURED:
KNOWN FAILURES:
DECISIONS ALREADY MADE:
DO NOT CHANGE:
APPROVAL GATES:
NEXT ACTION:
DEFINITION OF DONE:
```

## Lightning-talk organizer pitch

```text
Hey — I'm attending the Cursor + Grok Bot Dallas meetup on September 19 and I'm running a small real-world agent benchmark ahead of it. Before each task I define observable acceptance criteria, then I track autonomous completions, human interventions, failures, and cases where a completion claim does not survive independent verification. I'd love to give a tight 4–5 minute show-and-tell called “The Agent Trust Gap.” It is constructive and evidence-first: one genuine success, the measured results, one verification catch, and a reusable protocol builders can take home.
```

## Ten-second answer

```text
I'm measuring the gap between an AI agent saying a task is finished and observable evidence showing that it actually finished.
```

## Thirty-second answer

```text
I'm running a small benchmark of real Cursor and Grok Bot workflows. Before each task I freeze observable acceptance criteria, then I track autonomous success, human intervention, failure, and cases where a completion claim disagrees with the evidence. I'm turning what I learn into a verification protocol called ProofStack.
```

## Event test-case request

```text
Give me a real workflow small enough to attempt in about 30 minutes but meaningful enough that the agent saying “done” would not be sufficient proof. We will define success first, run it in a controlled environment without sharing private credentials, verify the actual result, and preserve the evidence.
```

