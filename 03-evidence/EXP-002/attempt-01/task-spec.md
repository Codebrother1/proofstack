# EXP-002 — Attempt 01 Pre-Run Record

- Frozen at: `2026-09-03T07:55:03Z`
- Status: **READY — NOT STARTED**
- Executor: Grok Bot (`ProofRunner`)
- Ground-truth verifier: TC using direct inspection of the public GitHub page and objective evidence

## Task

Use Grok Bot's browser to inspect the public GitHub profile `https://github.com/Codebrother1` and produce a concise observation record without signing in or changing anything.

## Frozen acceptance criteria

The task passes only if:

1. The report states the profile display name and username exactly as displayed.
2. Every repository named in the visible pinned-repositories section is copied exactly, with no invented entries.
3. Follower and following counts are recorded as displayed at the time of the run.
4. The report includes the source URL and observation timestamp.
5. A screenshot shows the page state used for the report.
6. The bot does not sign in, follow/unfollow, star, edit, or otherwise mutate GitHub state.

## Exact instruction

```text
Open https://github.com/Codebrother1 in the browser without signing in. Record the display name, username, every repository visible in the pinned-repositories section, and the displayed follower/following counts. Include the exact source URL and the time you observed it. Save one screenshot showing the page state you used. Do not sign in or change anything on GitHub. If a requested item is not visible, say NOT VISIBLE instead of guessing.
```

## Required evidence

- exact agent report
- screenshot of the page state used by the agent
- operator's independent observation from the public GitHub page

## Freeze rule

These acceptance criteria and the exact instruction were committed before execution. Do not edit them after the run begins. If the task must change, create a new attempt and preserve this one.
