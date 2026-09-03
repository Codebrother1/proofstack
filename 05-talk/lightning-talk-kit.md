# The Agent Trust Gap — Lightning Talk Kit

Working subtitle: **I gave AI teammates real work. Here's what actually finished.**

## Intellectual spine

1. Agents can do genuinely impressive work.
2. A completion claim and a verified outcome are different things.
3. We can measure that difference by defining success before execution.
4. Verification and evidence should be part of the workflow.
5. ProofStack is the protocol that came out of the benchmark.

## Framing guardrail

> This is not a verdict on Grok Bot or Cursor. Incorrect completion claims are a general risk in agentic systems. I'm using the tools I actually work with to learn what evidence I need before increasing their autonomy.

## 90-second structure

- **0:00–0:15 — Success:** one specific autonomous result with visible evidence.
- **0:15–0:30 — Question:** how often does “done” actually mean done?
- **0:30–0:55 — Method:** frozen criteria, exact prompts, ground-truth verification, four outcomes.
- **0:55–1:12 — Result:** final real numbers and one sharp discrepancy.
- **1:12–1:25 — Response:** ProofStack in one sentence.
- **1:25–1:30 — QR:** checklist, data, repo.

## 3-minute structure

- **0:00–0:25:** genuine success
- **0:25–0:50:** the trust-gap question and tool-agnostic framing
- **0:50–1:20:** benchmark method
- **1:20–1:55:** result chart
- **1:55–2:25:** false-success or recovery case
- **2:25–2:48:** ProofStack protocol
- **2:48–3:00:** QR and invitation

## 5-minute structure

- **0:00–0:30:** success first
- **0:30–1:00:** question and framing
- **1:00–1:35:** experiment design
- **1:35–2:20:** result chart and category differences
- **2:20–3:20:** one excellent false-success case with receipts
- **3:20–4:05:** what verification changed; include recovery if data supports it
- **4:05–4:35:** ProofStack
- **4:35–5:00:** giveaway, QR, close

Rehearse the five-minute version to 4:15–4:30.

## Opening draft

> One of these agents completed a real task for me with no rescue, and the evidence was genuinely impressive. That made the next question more important, not less: when an agent says the work is done, how do I know “done” actually means done?

## Method transition

> So I stopped grading the explanation and started grading the artifact. Before each run, I froze observable acceptance criteria. After the completion claim, I checked the files, application state, tests, screenshots, or other evidence myself. I scored the run as verified autonomous, verified assisted, failed, or false success.

## ProofStack transition

> Repeating this manually made one thing obvious: verification cannot be something I merely remember after the agent stops. It needs to be part of the workflow. I'm calling that protocol ProofStack: define success, execute, independently verify, attach evidence, then call it done.

## Closing draft

> I'm not trying to answer whether agents are good or bad. I'm asking a more useful engineering question: what evidence would I need before trusting this task to run without me? The QR has the method, sanitized data, checklist, and project. Take it, break it, and send me better tests.

## Slides — five maximum

1. **A real success** — task, evidence, why it mattered
2. **The question + method** — “How do we know done means done?”
3. **The real numbers** — populate only after dataset freeze
4. **One discrepancy** — claim versus evidence versus repair
5. **ProofStack + QR** — protocol and giveaway

## Evidence required before finalizing the talk

- final dataset count and category mix
- verified metrics generated from the workbook
- one autonomous success with clean receipts
- one false-success case or, if none occurs, the clearest verification catch
- one recovery example
- wording checked so observations are not universalized

