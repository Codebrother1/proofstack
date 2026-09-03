# Data Rules

`agent-trust-gap-log.xlsx` is the canonical dataset.

- One row equals one attempt or clearly labeled continuation.
- Use ISO dates (`YYYY-MM-DD`) and actual timestamps.
- Put long evidence inside the evidence folder; the workbook stores paths and concise notes.
- Do not publish a row until `privacy_review = Complete` and `publishable = Yes`.
- Never backfill an agent claim from memory; mark it unavailable in notes.
- If evidence is insufficient, use `UNVERIFIED`, not an assumed pass.

